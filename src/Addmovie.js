import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import {useFormik} from "formik";
import * as yup from "yup";
import './App.css';
import { API } from './global';


const formValidationSchema=yup.object({
    name:yup.string().min(2).required(),
    image:yup.string().required(),
    rating:yup.number().min(1).max(10).required(),
    summary:yup.string().min(20).required(),
    trailer:yup.string().required()

})

export function Addmovie() {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");
//   const [trailer, setTrailer] = useState("");
  const navigate= useNavigate();
  const {onChange, handleChange, onBlur,handleBlur,values,errors,onSubmit,handleSubmit,touched} = useFormik({
    initialValues: {
      name: "",
      image: "",
      rating:"",
      summary:"",
      trailer:""
    },
    validationSchema:formValidationSchema,
    onSubmit : (values)=>{
        fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    }).then(()=>navigate("/MovieDetails"));
    }
  });


//   const addtolist = () => {
//     const newmovie = {
//       name: name,
//       img: image,
//       rating: rating,
//       summary: summary,
//       trailer: trailer
//     };
//     // setMoviedata([...moviedata, newmovie]);

//     fetch(`https://61ea3b297bc0550017bc660c.mockapi.io/movies`, {
//       method: "POST",
//       body: JSON.stringify(newmovie),
//       headers: { "Content-Type": "application/json" },
//     }).then(()=>navigate("/MovieDetails"));
//   };

  return (
    <div>
      <form className="AddMovieContainer" onSubmit={handleSubmit}>
        <TextField
          name="name"
          id="moviename"
          label="Name"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          //error is a boolean, and  is mui validation, which turns the textfield to red if error is true.
          error={touched.name &&errors.name}
          //helper text helps in displaying error message in red if there is error. and in grey if no error.
          helperText= {touched.name && errors.name ? ( errors.name ) : ""}
        />
  
        <br />
        <TextField
          name="image"
          id="movieimage"
          label="Image"
          variant="outlined"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          error= {touched.image && errors.image}
          helperText= {touched.image && errors.image ? ( errors.image ) : ""}
        />
        <br />
        <TextField
          name="rating"
          id="movierating"
          label="Rating"
          variant="outlined"
          value={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          error= {touched.rating && errors.rating}
          helperText= {touched.rating && errors.rating ? ( errors.rating ) : ""}
        />
        <br />
        <TextField
          name="summary"
          id="moviesummary"
          label="Summary"
          variant="outlined"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.summary && errors.summary}
          helperText= {touched.summary && errors.summary ? ( errors.summary ) : ""}
        />
        <br />
        <TextField
          name="trailer"
          id="movietrailer"
          label="Trailer"
          variant="outlined"
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.trailer && errors.trailer}
          helperText= {touched.trailer && errors.trailer ? ( errors.trailer ) : ""}
        />
        <br />
        {/* <Button variant="contained" onClick={addtolist}>Add Movie</Button> */}
        <Button type="sumbit" variant="contained">
          Add Movie
        </Button>
      </form>
    </div>
  );


}
