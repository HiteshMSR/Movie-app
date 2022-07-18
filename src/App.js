import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import {useState} from 'react';
import{TicTacToe} from './TicTacToe';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import { minHeight } from '@mui/system';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import IconButton from '@mui/material/IconButton';
import { MovieDetails } from './MovieDetails';
import { Addmovie } from './Addmovie';
import { Moviesummary} from './MovieSummary';
import { EditMovie } from './EditMovie';
import { BasicForm } from './BasicForm';





function App() {
  
  
  const InitialMovieList=[

    {
    
    "name": "RRR",
    "poster":
    "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeposter_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, <fe>aring the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
    
    "name": "The Incredible Hulk",
    "poster": "https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-movie/incredible-hulk.jpg",
    "rating": 8.1,
    "summary": "The Incredible Hulk is a 2008 American superhero film based on the Marvel Comics character the Hulk. Produced by Marvel Studios and distributed by Universal Pictures, it is the second film in the Marvel.",
    "trailer": "https://www.youtube.com/watch?v=t7J1KAnwoF8"
    },
    {
    
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
    
    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
    
    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
    
    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
    
    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summaryx": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
    ]
  // const [moviedata,setMoviedata]=useState(InitialMovieList)
  const navigate=useNavigate();
  const [themeColor,setThemeColor]=useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: themeColor,
    },
  });

  return (
    <>
     <ThemeProvider theme={darkTheme}>
     <Paper elevation={18} style={{minHeight:"100vh", borderRadius:"0px"}} >
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate("/")} startIcon={<HomeIcon />}>Home</Button>
          <Button color="inherit" onClick={()=>navigate("/MovieDetails")} startIcon={<MovieIcon/>}>Movies</Button>
          <Button color="inherit" onClick={()=>navigate("/AddMovie")} startIcon={<AddIcon />}>Add Movies</Button>
          <Button color="inherit" onClick={()=>navigate("/TicTacToe")} startIcon={<AddIcon />}>Tic-Tac-Toe</Button>
          <Button color="inherit" style={{marginLeft:"auto"}} onClick={()=>{setThemeColor(themeColor==='light' ? 'dark' : 'light')}} 
                startIcon={themeColor==='light' ?<Brightness7Icon /> : <Brightness4Icon/>} >  
                {themeColor==='light' ? "Dark" : "Light"} Mode

            {/* {themeColor ==='dark' ?  <IconButton onClick={()=>{setThemeColor('light')}}><Brightness4Icon/>LightMode</IconButton> : <IconButton onClick={()=>{setThemeColor('dark')}}><Brightness7Icon/>DarkMode </IconButton>}  */}
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>

    <div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddMovie" element={<Addmovie  />} /> 
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="/Films" element={<Navigate replace to="/MovieDetails"/>}></Route>
        <Route path="*" element={<Navigate replace to="/404"/>}></Route>
        <Route path="/MovieDetails" element={<MovieDetails />}></Route>
         <Route path="/MovieDetails/:id" element={<Moviesummary />}></Route> 
        <Route path="/TicTacToe" element={<TicTacToe/>}></Route>
        <Route path="/EditMovie/:id" element={<EditMovie/>} ></Route>
        <Route path="/BasicForm" element={<BasicForm/>}></Route>
      </Routes>
      {/* <div className="MovieDetails">
      {moviedata.map( (obj) => (<Message props={obj} />))}
    </div> */}
    </div>
    </Paper>
    </ThemeProvider>
    </>
  ); 
}

export default App;

function NotFound(){
  return(
    <h1>NotFound</h1>

  )
}
function Home(){
  return(
<h2>Welcome to the Movie-App</h2>
  )
}

 

