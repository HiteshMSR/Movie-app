import { useState } from "react";
import { Counter } from './Counter';
import {useNavigate} from 'react-router-dom';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export function Message({ movie, id, deleteButton,editButton}) {
  const styles = {
    color: movie.rating > 8 ? "Green" : "red"
  };
  const [show, setShow] = useState(true);
  const navigate=useNavigate(); 


  return (

    <>
    <div className="CardHolder">
    <Card sx={{ maxWidth: 345, height:"min-content"}}>
      <CardMedia
        component="img"
        height="650px"
        image={movie.img}
        alt="green iguana"
      />
      <CardContent>
          <h2>{movie.name}
            <IconButton
          color="primary" 
          onClick={() => setShow(!show)}
          >
          { show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          </IconButton>
          <IconButton 
          color="primary"
          onClick={()=>navigate(`/MovieDetails/${id}`)}
          aria-label="Movie Details">
            <InfoRoundedIcon />
          </IconButton>

            </h2>
     
        <p style={styles}>⭐ {movie.rating}</p>
        {show ? <p className="DescBox">{movie.desc}</p> : null}
      </CardContent>
      <CardActions>
      <Counter /> {deleteButton} <span/> {editButton}
      </CardActions>
    </Card>
    </div>
    <div>
    {/* <button onClick={console.log(id)}>Delete</button> */}
    </div>

    

    </>
  );
}

