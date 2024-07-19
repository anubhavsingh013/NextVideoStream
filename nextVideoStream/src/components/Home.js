import React, { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import "./Home.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredShows, setFilteredShows] = useState([]);
  const [hideDisplay, setHideDisplay] = useState(false);

  useEffect(() => {
    const url = "http://localhost:8080/api/shows";
    axios.get(url).then((response) => {
      setShows(response.data);
    });
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setHideDisplay(false);
    setQuery(value);
    if (value.length > 0) {
      const suggestions = shows.filter((show) =>
        show.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredShows(suggestions);
    } else {
      setFilteredShows([]);
    }
  };

  const handleSuggestionClick = (show) => {
    setQuery(show.title);
    setHideDisplay(true);
    setFilteredShows([show]);
  };

  return (
    <div className="home">
      <div className="form-wrappper">
        <h1>Popular Shows</h1>
        <form className="form-component">
          <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
              setQuery(e.target.value);
            }}
            label="Search a Show"
            variant="outlined"
            placeholder="Search..."
            size="small"
            onChange={handleSearchChange}
          />

          <section
            className={`suggestion-list-wrapper ${
              hideDisplay ? "hideDisplay" : ""
            }`}
          >
            {filteredShows?.length > 0 && (
              <section className="suggestions-list">
                {filteredShows?.map((show) => (
                  <article
                    key={show.id}
                    className="selected-suggestion"
                    onClick={() => handleSuggestionClick(show)}
                  >
                    {show.title}
                  </article>
                ))}
              </section>
            )}
          </section>
        </form>
      </div>

      <div className="">
        {/* query item nahi mila */}
        {filteredShows.length === 0 && query !== "" && (
          <div className="no-items-found">No items found</div>
        )}

        <Grid container spacing={4}>
          {filteredShows.length === 0 && query === ""
            ? shows.map((show) => (
                <Grid item xs={3}>
                  <ShowCard key={show.id} show={show} />
                </Grid>
              ))
            : filteredShows.map((show) => (
                <Grid item xs={3}>
                  <ShowCard key={show.id} show={show} />
                </Grid>
              ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
