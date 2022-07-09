import { useState } from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
export function Counter() {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>

      <Badge badgeContent={like} color="success">
      <IconButton onClick={() => setLike(like + 1)}> 👍</IconButton>
      </Badge>
      <Badge badgeContent={dislike} color="error">
      <IconButton onClick={() => setDislike(dislike + 1)}> 👎</IconButton>
      </Badge>
      {/* <button onClick={() => setLike(like + 1)}>Like 👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>Dislike 👎   {dislike}</button> */}

    </div>
  );


}
