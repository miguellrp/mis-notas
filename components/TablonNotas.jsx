import { useState } from "react"
import Image from "next/image.js"
import { v4 as generarID } from "uuid"
import Nota from "./Nota.jsx"
import RoundedButton from "./RoundedButton.jsx"
import { Modal } from "react-responsive-modal"

import "../styles/Modal.css"

export default function ListaNotas() {
  const defaultPlaceholder = "☑️ Empezar a escribir mi nota...";

  const [notas, setNotas] = useState([
    {id: generarID(), placeholder: defaultPlaceholder},
  ]);
  
  const addNota = () => {
    const newNota = {
      id: generarID(),
      placeholder: defaultPlaceholder,
    };
    setNotas([...notas, newNota]);
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
      <div style={{display: "flex", columnGap: "20px", padding: "1rem"}}>
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
      {notas.map(nota => (
        <Nota key={nota.id} placeholder={nota.placeholder} handleDeleteNota={() => deleteNota(nota.id)} />
      ))}
      <Modal open={openModal} onClose={onCloseModal}>
        <h2>Guía rápida de uso</h2>
        <p>
          Hola 👋 Aquí podrás gestionar tus notas rápidas, las cuales quedarán
          almacenadas entre sesiones gracias al almacenamiento local de tu navegador web. <br/>
          ¡Estas notas reconocen la sintaxis Markdown! Es tan fácil como aplicar la sintaxis y un espacio
          entre el método y el texto al que se le aplica:
          <Image id="image_demo" src={"/captura_demo.png"} alt="Demostración de aplicación para sintaxis Markdown en las notas" width={450} height={360} />
          También reconoce los atajos de teclado propios para enriquecer el estilo del texto (CTRL+B 👉 <strong>fuente en negrita</strong>, CTRL+I 👉
          <i>fuente en cursiva</i>...). <br/>
          Y, por último, también puedes estilizar a posteriori. Simplemente selecciona el texto que quieras estilizar y ¡voilá! Te aparecerá un pequeño menú
          de estilos.
        </p>
      </Modal>
    </>
  )
}