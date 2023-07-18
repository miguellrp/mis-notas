import Image from "next/image"
import styles from "../styles/RoundedButton.module.css"

export default function RoundedButton({ idIcon, handleClick, imageButton, altImage }) {
  return <button
    id={styles.RoundedButton}
    onClick={handleClick}>
      <Image id={idIcon} priority={true}  src={imageButton} alt={altImage} width={30} height={30} />
    </button>
}