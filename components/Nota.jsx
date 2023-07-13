import Draggable from "react-draggable"
import TextAreaEditor from "./TextAreaEditor.jsx"
import { useState } from "react"
import styles from "../styles/Nota.module.css"
import "../styles/Modal.css"

export default function Nota({ placeholder, handleDeleteNota }) {
  const [isFocused, setIsFocused] = useState(false);

  // window -> ReferenceError (serverSide?)
  const xIndex = window.innerWidth / 2 - 120;  
  const yIndex = window.innerHeight / 2 - 110;

  const [isActive, setIsActive] = useState(false);
  const [background, setBackground] = useState("");
  const openListaColor = () => setIsActive(!isActive);

  return (
    <Draggable defaultPosition={{x: xIndex, y: yIndex}}
    bounds="parent"
    handle=".barra-superior"
    >
      <div id={styles.nota}
      style={{
          backgroundColor: background,
        }}
      className={isFocused ? styles.activa : styles.inactiva}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      >
        <div id={styles.barra_superior_nota}
        className="barra-superior"
        >
          <button className={styles.barra_superior_button} onClick={openListaColor}>🎨</button>
          <button className={styles.barra_superior_button} onClick={handleDeleteNota} style={{ fontSize: "x-large"}}>x</button>
        </div>
        <div id={styles.lista_colores}
        style={{ display: isActive ? "flex" : "none"}}>
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#ff67de" }}
            onClick={() => setBackground("#ff67de")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#f1e38b" }}
            onClick={() => setBackground("#f1e38b")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#87b8f0" }}
            onClick={() => setBackground("#87b8f0")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#82e271" }}
            onClick={() => setBackground("#82e271")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#de9f58" }}
            onClick={() => setBackground("#de9f58")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#82786b" }}
            onClick={() => setBackground("#82786b")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#ebebeb" }}
            onClick={() => setBackground("#ebebeb")}
          />
        </div>
        <TextAreaEditor placeholder={placeholder}/>
      </div>
    </Draggable>
  )
}