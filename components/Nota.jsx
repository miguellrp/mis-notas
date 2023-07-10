import Draggable from "react-draggable"
import TextAreaEditor from "./TextAreaEditor.jsx";
import styles from "../styles/Nota.module.css"

export default function Nota({ placeholder, handleDeleteNota, handleOnStop }) {
  
  // window -> ReferenceError (serverSide?)
  const xIndex = window.innerWidth / 2 - 120;  
  const yIndex = window.innerHeight / 2 - 110;

  return (
    <Draggable bounds="parent" defaultPosition={{x: xIndex, y: yIndex}} handle=".barra-superior" onStop={handleOnStop}>
      <div id={styles.nota} >
        <div id={styles.barra_superior_nota} className="barra-superior">
          <button className={styles.delete_button} onClick={handleDeleteNota}>x</button>
        </div>
        <TextAreaEditor placeholder={placeholder}/>
      </div>
    </Draggable>
  )
}