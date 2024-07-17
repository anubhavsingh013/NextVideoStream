import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard';
import './Home.css'; 
import axios from 'axios'
// import { useFetcher } from 'react-router-dom';

// const shows = [
//       { 
//         id: 1, 
//         title: 'Stranger Things', 
//         price: '$8.99', 
//         images: ['https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'], 
//         rating: 4.7
//       },
//       { 
//         id: 2,
//         title: 'The Crown', 
//         price: '$8.99', 
//         images: ['https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRa2Ojolth_4mw7fNztaPZJHe6V0oyMCD-NF0By0ddFyNQRb7NdWoHl3BPwSXVS3dbgG-jeiIaKzqAxqcpR_BGOHghInV3iHy6pY.jpg?r=f43'], 
//         rating: 4.6
//       },
//       { 
//         id: 3, 
//         title: 'The Mandalorian', 
//         price: '$7.99', 
//         images: ['https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4826879538A92B52B2B316E2E9D5A1BEC5C774C094FF9F96E3265E0D4220E3E6/scale?width=1200&aspectRatio=1.78&format=webp'], 
//         rating: 4.8
//       },
//       { 
//         id: 4, 
//         title: 'WandaVision', 
//         price: '$7.99', 
//         images: ['https://resizing.flixster.com/KSmwAP9TODYGVZH4a-OJusb4BxI=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjgzNDc3Ni53ZWJw'], 
//         rating: 4.7
//       },
//       {id: 5, 
//         title: 'Secret Genius', 
//         price: '$5.99', 
//         images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxhxNf8-ng_jb63BTidkyAlloihQGk0UrbcUdekCuQvIMzvk0'], 
//         rating: 4.5
//      },
//       { 
//         id: 6, 
//         title: 'Game of Thrones', 
//         price: '$5.99', 
//         images: ['https://static.hbo.com/game-of-thrones-1-1920x1080.jpg'], 
//         rating: 4.9
//       },
//       { 
//         id: 7, 
//         title: 'Bridgerton', 
//         price: '$8.99', 
//         images: ['https://pictures.abebooks.com/isbn/9780946162673-uk-300.jpg'], 
//         rating: 4.5
//       },
//       { 
//         id: 8, 
//         title: 'Money Heist', 
//         price: '$8.99', 
//         images: ['https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQbm_e3DQYMqYApzHilEi8qF94zu9K_GiyEvxjgvBkIQNQSa7-BkkHBIisOIdPFdIkc77oWrA-a6LV8egGCoszLt1hpQ2TJz8-IBiUVfp8qwimlu3D5Yk83WUteWY1dElPHDp3DQco9xxtM3EHutQeyAvttk.jpg?r=f03'], 
//         rating: 4.4
//       },
//       { 
//         id: 9, 
//         title: 'Loki', 
//         price: '$7.99', 
//         images: ['https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2018/09/loki-thor-ragnarok.jpg'], 
//         rating: 4.8
//       },
//       { 
//         id: 10, 
//         title: 'The Night Manager', 
//         price: '$5.99', 
//         images: ['https://i.ytimg.com/vi/6QJQysiUxKc/maxresdefault.jpg'], 
//         rating: 4.7
//       }
// ];


// const shows=[
//   {
//     id:1,
//     title:'The Night Manager',
//     price:'5.99',
//     imageUrl:['https://i.ytimg.com/vi/6QJQysiUxKc/maxresdefault.jpg','https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2018/09/loki-thor-ragnarok.jpg'],
//     rating:4.7,
//     platform_name:'Netflix',
//     imdbid:100
//   }
// ]


const Home =() => {

  const[shows,setShows]=useState([]);
    
      
    useEffect(()=>{
         const url = 'http://localhost:8080/api/shows';
        axios.get(url)
        .then(response => {
          // console.log(response.data)
          setShows(response.data)
        })
    },[]);

    
  return (
    <div className="home">
      <h1>Popular Shows</h1>
      <div className="card-container">
        {shows.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Home;
