import Draggable from "react-draggable"
import TextAreaEditor from "./TextAreaEditor.jsx";
import { useState } from "react";
import styles from "../styles/Nota.module.css"

export default function Nota({ placeholder, handleDeleteNota }) {
  const [zIndex, setZIndex] = useState(1);

  // window -> ReferenceError (serverSide?)
  const xIndex = window.innerWidth / 2 - 120;  
  const yIndex = window.innerHeight / 2 - 110;

  const handleOnStart = () => {
    setZIndex((prevZIndex) => prevZIndex + 1);
  };

  const handleOnStop = () => {
    setZIndex((prevZIndex) => prevZIndex--);
  };

  return (
    <Draggable defaultPosition={{x: xIndex, y: yIndex}}
      bounds="parent"
      handle=".barra-superior"
      onStart={handleOnStart}
      onStop={handleOnStop}>
      <div id={styles.nota} style={{ zIndex }}>
        <div id={styles.barra_superior_nota} className="barra-superior">
          <button className={styles.delete_button} onClick={handleDeleteNota}>x</button>
        </div>
        <TextAreaEditor placeholder={placeholder}/>
      </div>
    </Draggable>
  )
}