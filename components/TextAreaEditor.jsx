import React from "react"
import Image from "next/image"
import { BubbleMenu, useEditor, EditorContent } from "@tiptap/react"
import { Color } from "@tiptap/extension-color"
import StarterKit from "@tiptap/starter-kit"
import Highlight from "@tiptap/extension-highlight"
import TextStyle from "@tiptap/extension-text-style"
import TextAlign from "@tiptap/extension-text-align"
import Placeholder from "@tiptap/extension-placeholder"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"

import "../styles/TextAreaEditor.css"

export default function TextAreaEditor ({ placeholder }) {
  const widthBubbleIcon = 20;
  const heightBubbleIcon = 20;

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      Underline,
      Link,
      Highlight,
      Placeholder.configure({
        placeholder: placeholder,
        opacity: 0.3,
      }),
      TextAlign.configure({
        types: ["paragraph", "heading"]
      }),
    ],
  })

  return (
    <>
      {editor && <BubbleMenu editor={editor} tippyOptions={{ appendTo: "parent", placement: "bottom-end", duration: 300, maxWidth: "200px", moveTransition: 'transform 0.3s ease-in-out',}}>
        <button id="button_bubble"
        onClick={ColorBubbleButton}>
          <Image id="icon_bubble" src="/bubble_icons/palette.svg" alt="Símbolo de una paleta de colores" width={widthBubbleIcon} height={heightBubbleIcon}/>
          <input type="color" id="bubble_button_color"
          onInput={event => editor.chain().focus().setColor(event.target.value).run()}
          value={editor.getAttributes('textStyle').color}
          />
        </button>
        <button id="button_bubble" name="bold_button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <Image id="icon_bubble" src="/bubble_icons/bold.svg" alt="Símbolo de carácter en negrita" width={widthBubbleIcon} height={heightBubbleIcon}/>
        </button>
        <button id="button_bubble"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <Image id="icon_bubble" src="/bubble_icons/italic.svg" alt="Símbolo de carácter en cursiva" width={widthBubbleIcon} height={heightBubbleIcon}/>
        </button>
        <button id="button_bubble"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
        >
          <Image id="icon_bubble" src="/bubble_icons/underline.svg" alt="Símbolo de carácter subrayado" width={widthBubbleIcon} height={heightBubbleIcon}/>
        </button>
        <button id="button_bubble"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <Image id="icon_bubble" src="/bubble_icons/strike.svg" alt="Símbolo de carácter tachado" width={widthBubbleIcon} height={heightBubbleIcon}/>
        </button>
        <button id="button_bubble"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive('highlight') ? 'is-active' : ''}
        >
          <Image id="icon_bubble" src="/bubble_icons/highlighter.svg" alt="Símbolo de resaltar texto" width={widthBubbleIcon} height={heightBubbleIcon}/>
        </button>
        <button id="button_bubble"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        >
          <Image id="icon_bubble" src="/bubble_icons/text_align_left.svg" alt="Símbolo de alinear texto a la izquierda" width={widthBubbleIcon} height={heightBubbleIcon}/>
        </button>
      <button id="button_bubble"
      onClick={() => editor.chain().focus().setTextAlign('center').run()}
      className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        <Image id="icon_bubble" src="/bubble_icons/text_align_center.svg" alt="Símbolo de alinear texto centrado" width={widthBubbleIcon} height={heightBubbleIcon}/>
      </button>
      <button id="button_bubble"
      onClick={() => editor.chain().focus().setTextAlign('right').run()}
      className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        <Image id="icon_bubble" src="/bubble_icons/text_align_right.svg" alt="Símbolo de alinear texto a la derecha" width={widthBubbleIcon} height={heightBubbleIcon}/>
      </button>
      <button id="button_bubble"
      onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
      >
        <Image id="icon_bubble" src="/bubble_icons/text_align_justify.svg" alt="Símbolo de justificar el texto" width={widthBubbleIcon} height={heightBubbleIcon}/>
      </button>
      <button id="button_bubble"
      onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
        <Image id="icon_bubble" src="/bubble_icons/clear_nodes.svg" alt="Símbolo de limpiar formato" width={widthBubbleIcon} height={heightBubbleIcon}/>
      </button>
      </BubbleMenu>}
      <EditorContent id="texto_nota" editor={editor} />
    </>
  )

  function ColorBubbleButton() {
    document.getElementById("bubble_button_color").click(); 
  }

}