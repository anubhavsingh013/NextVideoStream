// import React from "react";
// import "./ShowCard.css";
// import { Link } from "react-router-dom";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// const ShowCard = (props) => {
//   const { show = {} } = props;
//   return (
//     <div className="show-card">
//       <img
//         src={show.imagelist[0].imageUrl}
//         alt={show.title}
//         className="show-image"
//       />
//       <div className="show-info">
//         <h2>{show.title}</h2>
//         <h3>Rating:{show.rating}</h3>
//         <h4>Price($): {show.price}</h4>
//         <div className="show-vendor">
//           <h2>{show.platformName}</h2>
//         </div>
//       </div>
//       <Link to={`/carddetail/${show.id}`}>
//         {/* <button type="button" className="btn btn-primary">
//           View More
//         </button> */}
//         <Button variant="contained">View More</Button>
//       </Link>
//     </div>
//   );
// };

// export default ShowCard;

import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ShowCard = (props) => {
  const { show = {} } = props;
  return (
    <Link to={`/carddetail/${show.id}`} style={{ textDecoration: "none" }}>
      <Card
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "lightgrey",
        }}
      >
        <CardMedia
          component="img"
          alt={show.title}
          height="140"
          image={
            show.imagelist[0]?.imageUrl ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg"
          }
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {show.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {show.rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${Math.round(show.price * 100) / 100}
          </Typography>
        </CardContent>

        <CardActions>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Button size="small" variant="contained">
              View More
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Link>
  );
};

export default ShowCard;
