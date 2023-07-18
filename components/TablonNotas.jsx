import { useEffect, useState } from "react"
import Image from "next/image.js"
import { v4 as generarID } from "uuid"
import Nota from "./Nota.jsx"
import RoundedButton from "./RoundedButton.jsx"
import { Modal } from "react-responsive-modal"
import "../styles/Modal.css"


export default function TablonNotas() {
  const defaultPlaceholder = "☑️ Empezar a escribir mi nota...";
  const notasAlmacenadas = typeof window !== 'undefined' && window.localStorage.getItem("notas");
  const notasIniciales = notasAlmacenadas ? JSON.parse(notasAlmacenadas) : [{ id: generarID(), placeholder: defaultPlaceholder }];
  
  const [notas, setNotas] = useState(notasIniciales);

  // window -> ReferenceError (serverSide?)
  const xIndex = window.innerWidth / 2 - 130;  
  const yIndex = window.innerHeight / 2 - 110;
  
  const addNota = () => {
    const newNota = {
      id: generarID(),
      placeholder: defaultPlaceholder,
      defaultPos: {x: xIndex, y: yIndex},
    };
    setNotas([...notas, newNota]);
  };

  useEffect(() => {
    localStorage.setItem("notas", JSON.stringify(notas));
  }, [notas])

  const updatePos = (data, index) => {
    let newArrNotas = [...notas];
    newArrNotas[index].defaultPos = {x: data.x, y: data.y};
    setNotas(newArrNotas);
  };

  const updateContent = (id, newContent) => {
    const updatedNotas = notas.map(nota => {
      if (nota.id === id) {
        return { ...nota, content: newContent };
      }
      return nota;
    });
    setNotas(updatedNotas);
    localStorage.setItem(`content_${id}`, newContent);
  };

  const deleteNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  const clearTablon = () => {
    setNotas([]);
  }

  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return (
    <>
      <div style={{
        display: "flex",
        position: "fixed",
        flexDirection: "column",
        rowGap: "20px",
        padding: "0.5em",
      }}>
        <RoundedButton
          handleClick={addNota}
          imageButton="ico_add.svg"
          altImage="Símbolo de sumar (+)"
        />
        <RoundedButton
          handleClick={clearTablon}
          imageButton="ico_clear.svg"
          altImage="Icono de una papelera"
        />
        <RoundedButton
          handleClick={onOpenModal}
          imageButton="ico_info.svg"
          altImage="Icono de información"
        />
      </div>
      {notas.map((nota, index) => (
        <Nota key={nota.id}
        id={nota.id}
        defaultPos={nota.defaultPos}
        placeholder={nota.placeholder}
        handleUpdateContent={(newContent) => updateContent(nota.id, newContent)}
        handleDeleteNota={() => deleteNota(nota.id)}
        handleOnStop={(e, data) => {
          updatePos(data, index);
        }}
        />
      ))}
      <Modal open={openModal} onClose={onCloseModal}>
        <h1 id="titulo">🗒️ Breve nota informativa de uso 🗒️</h1>
        <p>
          ¡Hola! 👋 Aquí podrás gestionar tus notas rápidas, las cuales quedarán
          almacenadas entre sesiones gracias al almacenamiento local de tu navegador web. <br/>
          ¡Estas notas reconocen la sintaxis Markdown! Es tan fácil como aplicar la sintaxis y observar como
          se aplica el estilado Markdown:
        </p>
          <Image id="image_demo" src={"/modal/Demo_Markdown.gif"} alt="Demostración de aplicación para sintaxis Markdown en las notas" width={450} height={360} />
        <figcaption>  
          Para echar un 👀 a la sintaxis, entra en esta <a href="https://tutorialmarkdown.com/guia" target="_blank">guía rápida de
          Markdown</a> preparada por Edu Lázaro (<a href="https://twitter.com/neeonez" target="_blank">@neeonez</a>).
        </figcaption>
        <p>
          Además reconoce los atajos de teclado propios para enriquecer el estilo del texto (CTRL+B 👉 <strong>fuente en negrita</strong>, CTRL+I 👉
          <i> fuente en cursiva</i> ...). Para ver todos los atajos de teclado, entra <a href="https://tiptap.dev/api/keyboard-shortcuts" target="_blank">aquí</a>.
        </p>
        <p>
        Por último, también puedes estilizar a posteriori. Simplemente selecciona el texto que quieras estilizar y ...
        </p>
        <Image id="image_demo" src={"/modal/Demo_BubbleMenu.gif"} alt="Demostración de aplicación para enriquecer texto en las notas" width={450} height={360} />
        <figcaption>✨Voilá✨ Te aparecerá un pequeño menú de estilos.</figcaption>
        <footer>💙 Feito con agarimo por <a href="https://github.com/miguellrp" target="_blank"> @miguellrp</a> 🤍</footer>
      </Modal>
    </>
  )
}