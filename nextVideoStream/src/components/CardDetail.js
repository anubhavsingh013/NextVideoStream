import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CardDetail.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CardDetail = (props) => {
  // const {index,handleSelect} = props
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the show data!", error);
      });
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="card-detail">
        <h1>{show.title}</h1>
        <h3>Rating: {show.rating}</h3>
        <h3>
          Price: $
          {Math.round((show.price + show.price * 0.1 * show.rating) * 100) /
            100}
        </h3>
        <div className="show-vendor">
          <h2>{show.platformName}</h2>
        </div>

        <div className="image-gallery">
          <Carousel className="slider">
            {show.imagelist.map((image, idx) => {
              return (
                <Carousel.Item key={image.imageUrl}>
                  <img 
                  className="slider"
                  // style={{width:"100%",height:"100%",objectFit:"cover"}}
                  src={image.imageUrl} alt="" key={idx}/>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
