import Draggable from "react-draggable"
import TextAreaEditor from "./TextAreaEditor.jsx"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Nota.module.css"
import "../styles/Modal.css"

export default function Nota({ id, defaultPos, placeholder, handleOnStop, handleDeleteNota }) {
  const [isFocused, setIsFocused] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [background, setBackground] = useState("var(--rosaCremado)");
  const openListaColor = () => setIsActive(!isActive);

  function updateBackgroundColor(color) {
    setBackground(color);
    localStorage.setItem(`backgroundcolor_${id}`, color);
  }

  const notaRef = useRef(null);

  useEffect(() => {
    const width = localStorage.getItem(`widthNota_${id}`);
    const height = localStorage.getItem(`heightNota_${id}`);
    if (width && height) {
      notaRef.current.style.width = width;
      notaRef.current.style.height = height;
    }
  }, [id]);

  return (
    <Draggable defaultPosition={defaultPos}
    defaultClassName="draggable"
    defaultClassNameDragged=""
    bounds="parent"
    handle=".barra-superior"
    onStop={handleOnStop}
    onMouseDown={() => {
      localStorage.setItem(`widthNota_${id}`, notaRef.current.style.width);
      localStorage.setItem(`heightNota_${id}`, notaRef.current.style.height);
    }}
    >
      <div id={styles.nota}
      ref={notaRef}
      style={{
        backgroundColor: localStorage.getItem(`backgroundcolor_${id}`) || background,
        width: localStorage.getItem("widthNota"),
        height: localStorage.getItem("heightNota"),
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
            onClick={() => updateBackgroundColor("#ff67de")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#f1e38b" }}
            onClick={() => updateBackgroundColor("#f1e38b")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#87b8f0" }}
            onClick={() => updateBackgroundColor("#87b8f0")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#82e271" }}
            onClick={() => updateBackgroundColor("#82e271")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#f7be7c" }}
            onClick={() => updateBackgroundColor("#f7be7c")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#b3a695" }}
            onClick={() => updateBackgroundColor("#b3a695")}
          />
          <input type="button" className={styles.color_picker}
            style={{ backgroundColor: "#ebebeb" }}
            onClick={() => updateBackgroundColor("#ebebeb")}
          />
        </div>
        <TextAreaEditor placeholder={placeholder} notaId={id} />
      </div>
    </Draggable>
  )
}