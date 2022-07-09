import { Message } from './Message';
import {useState,useEffect} from 'react';
import{createContext} from 'react';
import { Addmovie } from './Addmovie';
import Button from '@mui/material/Button';
import{Navigate, useNavigate } from "react-router-dom";


const MovieDataContext = createContext();

export function MovieDetails({ }) {
    const navigate=useNavigate();

     const [moviedata,setMoviedata]=useState([])
        const getMovies = () =>{
        fetch("https://61ea3b297bc0550017bc660c.mockapi.io/movies", {method: 'GET'})
        .then((data)=>data.json())
        .then((mvs)=>setMoviedata(mvs));

        }
    useEffect(() => getMovies(),[])


    const deleteMovie=(id)=>{fetch(
        `https://61ea3b297bc0550017bc660c.mockapi.io/movies/${id}`,
        { method: "DELETE" })
        .then((data)=>getMovies())
        ;}
    

  return (
    <>
      {/* <MovieDataContext.Provider value={moviedata,setMoviedata}> */}
      <div className="MovieDetails">
        {moviedata.map((obj, index) => (
          <Message
            key={obj.id}
            movie={obj}
            id={obj.id}
            deleteButton={
              <Button
                onClick={() => deleteMovie(obj.id)}>
                DeleteME
              </Button>
            }
            editButton={
                <Button
                  onClick={() => navigate(`/EditMovie/${obj.id}`)}>
                 EditME
                </Button>
              }

          />
        ))}
      </div>
      {/* <Addmovie /> */}
      {/* </MovieDataContext.Provider> */}
    </>
  );

}
