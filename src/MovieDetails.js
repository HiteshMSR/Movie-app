import { Message } from './Message';
import {useState,useEffect} from 'react';
import{createContext} from 'react';
import { Addmovie } from './Addmovie';
import Button from '@mui/material/Button';
import{Navigate, useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from './global';


const MovieDataContext = createContext();

export function MovieDetails({ }) {
    const navigate=useNavigate();

     const [moviedata,setMoviedata]=useState([])
        const getMovies = () =>{
        fetch(`${API}/movies`, {method: 'GET'})
        .then((data)=>data.json())
        .then((mvs)=>setMoviedata(mvs));

        }
    useEffect(() => getMovies(),[])


    const deleteMovie=(id)=>{fetch(
        `${API}/movies/${id}`,
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
              <IconButton 
               style={{marginLeft:"auto"}} 
              color="error"
              onClick={() => deleteMovie(obj.id)} 
              aria-label="delete" >
              <DeleteIcon />
            </IconButton>
              // <Button
              //   onClick={() => deleteMovie(obj.id)}>
              //   DeleteME
              // </Button>
            }
            editButton={
              <IconButton 
              color="secondary"
              onClick={() => navigate(`/EditMovie/${obj.id}`)}
              aria-label="delete" >
              <EditIcon />
            </IconButton>
                // <Button
                //   onClick={() => navigate(`/EditMovie/${obj.id}`)}>
                //  EditME
                // </Button>
              }

          />
        ))}
      </div>
      {/* <Addmovie /> */}
      {/* </MovieDataContext.Provider> */}
    </>
  );

}
