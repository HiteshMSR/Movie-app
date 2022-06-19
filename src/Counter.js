import { useState } from "react";

export function Counter() {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>Like 👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>Dislike 👎   {dislike}</button>

    </div>
  );


}
