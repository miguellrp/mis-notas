import Draggable from "react-draggable"
import TextAreaEditor from "./TextAreaEditor.jsx";
import { useState } from "react";

import styles from "../styles/Nota.module.css"

export default function Nota({ placeholder, handleDeleteNota }) {
  const [isActive, setIsActive] = useState(false);

  // window -> ReferenceError (serverSide?)
  const xIndex = window.innerWidth / 2 - 120;  
  const yIndex = window.innerHeight / 2 - 110;

  const handleOnMouseDown = () => {
    setIsActive(!isActive);
  };

  return (
    <Draggable defaultPosition={{x: xIndex, y: yIndex}}
      bounds="parent"
      handle=".barra-superior"
      defaultClassName={styles.nota_top}
      >
      <div id={styles.nota} tabIndex={1}>
        <div id={styles.barra_superior_nota} className="barra-superior">
          <button className={styles.delete_button} onClick={handleDeleteNota}>x</button>
        </div>
        <TextAreaEditor placeholder={placeholder}/>
      </div>
    </Draggable>
  )
}