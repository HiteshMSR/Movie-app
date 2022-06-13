import logo from './logo.svg';
import './App.css';

function App() {
  const data=[
    { name:"Hitesh", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkWUSSBG0cSo-YZjdsB5TOhjNWQeBaEAj4g&usqp=CAU"},
    {name:"Abhishek", img:"https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"}
  ]
  return (
    <div className="App">
      {data.map( (obj) => (<Message name={obj.name} img={obj.img} />))}
    </div>
  );
}

export default App;



function Message(props) {
  return (
  <div>
   <img className="profile-pic" src={props.img} />
    <h1> Hello, {props.name}</h1>
  </div>
  
  )
}