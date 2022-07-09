import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams,useNavigate } from 'react-router-dom';


export function EditMovie() {

    const { id } = useParams(); 
    
    const [moviedata,setMoviedata]=useState(null)
    const getMovie = () =>{
        fetch(`https://61ea3b297bc0550017bc660c.mockapi.io/movies/${id}`, {method: 'GET'})
        .then((data)=>data.json())
        .then((mv)=>setMoviedata(mv));
  
          }
      useEffect(() => getMovie(),[])
    
      return moviedata ? <EditMovieForm moviedata={moviedata}/> : "Loading......."

}

function EditMovieForm({moviedata}){
    const [name, setName] = useState(moviedata.name);
  const [image, setImage] = useState(moviedata.img);
  const [rating, setRating] = useState(moviedata.rating);
  const [summary, setSummary] = useState(moviedata.desc);
  const [trailer, setTrailer] = useState(moviedata.trailer);
  const navigate = useNavigate();
 

  const updateMovie = () => {
    const newmovie = {
      name: name,
      img: image,
      rating: rating,
      desc: summary,
      trailer: trailer
    };
    // setMoviedata([...moviedata, newmovie]);

    fetch(`https://61ea3b297bc0550017bc660c.mockapi.io/movies/${moviedata.id}`, {
        
      method: "PUT",
      body: JSON.stringify(newmovie),
      headers: { "Content-Type": "application/json" },
    }).then(()=> navigate("/MovieDetails"));
  };

  return (
    <div>

      <div className="AddMovieContainer">
        <TextField value={name} id="moviename" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} /> <br />
        <TextField value={image} id="movieimage" label="Image" variant="outlined" onChange={(event) => setImage(event.target.value)} /><br />
        <TextField value={rating} id="movierating" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} /><br />
        <TextField value={summary} id="moviesummary" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} /><br />
        <TextField value={trailer} id="movietrailer" label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} /> <br />
        <Button variant="contained" onClick={updateMovie}>Save</Button>

      </div>

    </div>



  );
}
