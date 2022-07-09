import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState,useEffect } from "react";


export function Moviesummary({ }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [moviedata,setMoviedata]=useState({})
        const getMovie = () =>{
        fetch(`https://61ea3b297bc0550017bc660c.mockapi.io/movies/${id}`, {method: 'GET'})
        .then((data)=>data.json())
        .then((mv)=>setMoviedata(mv));

        }
    useEffect(() => getMovie(),[])

  return (
    <div className="Movie-traier-Container">
      <iframe
        width="100%"
        height="550"
        src={moviedata.trailer}
        title="RRR Trailer (Telugu) - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Button onClick={() => navigate(-1)} variant="contained" startIcon={<ArrowBackIosIcon />}>Go Back</Button>

      {/* <button onClick={()=>navigate(-1)}>Back</button> */}
    </div>
  );
}
