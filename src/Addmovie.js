import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


export function Addmovie() {



  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate= useNavigate();

  const addtolist = () => {
    const newmovie = {
      name: name,
      img: image,
      rating: rating,
      desc: summary,
      trailer: trailer
    };
    // setMoviedata([...moviedata, newmovie]);

    fetch(`https://61ea3b297bc0550017bc660c.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newmovie),
      headers: { "Content-Type": "application/json" },
    }).then(()=>navigate("/MovieDetails"));
  };

  return (
    <div>

      <div className="AddMovieContainer">
        <TextField id="moviename" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} /> <br />
        <TextField id="movieimage" label="Image" variant="outlined" onChange={(event) => setImage(event.target.value)} /><br />
        <TextField id="movierating" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} /><br />
        <TextField id="moviesummary" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} /><br />
        <TextField id="movietrailer" label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} /> <br />
        <Button variant="contained" onClick={addtolist}>Add Movie</Button>

      </div>

    </div>



  );


}
