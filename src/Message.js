import { useState } from "react";
import { Counter } from './Counter';

export function Message({ props }) {
  const styles = {
    color: props.rating > 8 ? "Green" : "red"
  };
  const [show, setShow] = useState(true);

  return (
    <div className="MovieBlock">
      <img className="Imagedisplay" src={props.img} />
      <div className="MovieSummary">
        <h2>{props.name}</h2>
        <p style={styles}>⭐ {props.rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle Suummary</button>
      {show ? <p>{props.desc}</p> : null}
      <Counter />
    </div>

  );
}

