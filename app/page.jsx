'use client'

import React from "react"
import TablonNotas from "/components/TablonNotas.jsx"
import { chakra_petch, indie_flower, quicksand } from "./localFonts.jsx"

export default function HomePage() {
  return (
    <>
      <style jsx global>{`
        :root {
          --chakra-petch-font: ${chakra_petch.style.fontFamily};
          --indie-flower-font: ${indie_flower.style.fontFamily};
          --quicksand-font: ${quicksand.style.fontFamily};
        }
      `}</style>
      <h1 id="titulo">mis notas 🗒️</h1>
      <TablonNotas />
    </>
  )
}
