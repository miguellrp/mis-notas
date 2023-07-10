import { useState } from "react"
import { v4 as generarID } from "uuid";
import Nota from "./Nota.jsx";
import RoundedButton from "./RoundedButton.jsx";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

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
        <h2>Simple centered modal</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
      </Modal>
    </>
  )
}