import { useState } from "react";
import "./styles.css";

export default function App() {
  let [length, setValue] = useState("0");
  let [displayButton, setDisplay] = useState(false);

  let textNumber = (e) => {
    length = e.target.value.length;
    setValue(length);
    setDisplay(length > 10 ? true : false);
  };

  return (
    <div>
      <textarea onChange={textNumber}></textarea>
      <div>{length}</div>
      <button disabled={displayButton}>post</button>
    </div>
  );
}
