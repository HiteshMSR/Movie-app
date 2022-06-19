import logo from './logo.svg';
import './App.css';
import { Message } from './Message';
import {useState} from 'react';


function App() {
  
  const InitialMovieList=[
    { name:"RRR", img:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG", desc:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",rating:8.8},
    {name:"Iron Man 2", img:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg", desc:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.", rating:7},
    {name:"No Country for Old Men", img:"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg", desc:"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.", rating:8.1},
    {name:"Jai Bhim", img:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg", desc:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case", rating:8.8},
    {name:"The Avengers", img:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg", desc:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.", rating:8}
  
  ]
  const [moviedata,setMoviedata]=useState(InitialMovieList)

  return (
    <div> 
      <Addmovie moviedata={moviedata} setMoviedata={setMoviedata} />
    <div className="MovieDetails">
      {moviedata.map( (obj) => (<Message props={obj} />))}
    </div>
    </div>
  ); 
}

export default App;


function Addmovie({moviedata, setMoviedata}){

  const [name,setName]=useState("")
  const [image,setImage]=useState("")
  const [rating,setRating]=useState("")
  const [summary,setSummary]=useState("")

  return(
      <div>
        
              <div className="AddMovieContainer">
          
                  <input type="text" id="moviename" placeholder="Name" onChange= {(event)=>setName(event.target.value)}></input><br />
                  <input type="text" id="movieimage" placeholder="Poster" onChange={(event) => setImage(event.target.value)}></input><br />
                  <input type="text" id="movierating" placeholder="Rating" onChange={(event) => setRating(event.target.value)}></input><br />
                  <input type="text" id="moviesummary" placeholder="Summary" onChange={(event) => setSummary(event.target.value)}></input><br />
                  {<button className="AddMoviebtn " onClick={()=>{
                    const newmovie={
                      name:name,
                      img:image,
                      rating:rating,
                      desc:summary,
                    }
                    setMoviedata([...moviedata, newmovie])
                  }}>Add Movie</button>  } 
              </div>
      </div> 
  )

  
}
