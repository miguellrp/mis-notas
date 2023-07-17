import Draggable from "react-draggable"
import TextAreaEditor from "./TextAreaEditor.jsx"
import { useState } from "react"
import styles from "../styles/Nota.module.css"
import "../styles/Modal.css"

export default function Nota({ id, defaultPos, placeholder, handleOnStop, handleDeleteNota }) {
  const [isFocused, setIsFocused] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [background, setBackground] = useState("");
  const openListaColor = () => setIsActive(!isActive);

  function setBackgroundColor(color) {
    setBackground(color);
    localStorage.setItem(`backgroundcolor_${id}`, color);
  }

  return (
    <Draggable defaultPosition={defaultPos}
    bounds="parent"
    handle=".barra-superior"
    onStop={handleOnStop}
    >
      <div id={styles.nota}
      style={{
        backgroundColor: localStorage.getItem(`backgroundcolor_${id}`) || background,
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
            onClick={() => setBackgroundColor("#ff67de")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#f1e38b" }}
            onClick={() => setBackgroundColor("#f1e38b")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#87b8f0" }}
            onClick={() => setBackgroundColor("#87b8f0")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#82e271" }}
            onClick={() => setBackgroundColor("#82e271")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#f7be7c" }}
            onClick={() => setBackgroundColor("#f7be7c")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#b3a695" }}
            onClick={() => setBackgroundColor("#b3a695")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#ebebeb" }}
            onClick={() => setBackgroundColor("#ebebeb")}
          />
        </div>
        <TextAreaEditor placeholder={placeholder} notaId={id} />
      </div>
    </Draggable>
  )
}