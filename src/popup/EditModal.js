import React from 'react'
import Modal from './Modal'

import './Input.css'

const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

export default function EditModal({ closeModal, entryText, editEntry }) {
  const [input, setInput] = React.useState(entryText)
  const [isValid, setValid] = React.useState(true)

  /* 
    On every change, set the text and validate it
  */
  const handleChange = text => {
    setInput(text)
    validateInput(text)
  }

  /* 
    Validate input based on regex
  */
  const validateInput = text => {
    text.match(URL_REGEX) ? setValid(true) : setValid(false)
  }

  const handleKeyDown = e => {
    if (isValid && input.length > 0 && e.keyCode === 13) {
      editEntry(input)
      closeModal()
    }
  }

  return (
    <Modal handleCloseModal={closeModal} header="Edit Domain">
      <input
        className={`input ${
          input.length !== 0 ? (isValid ? 'valid' : 'invalid') : ''
        }`}
        value={input}
        onChange={e => {
          handleChange(e.target.value)
        }}
        placeholder="example.com"
        autoFocus
        onKeyDown={e => handleKeyDown(e)}
      />
      <div className="buttons">
        <button className="cancel" onClick={() => closeModal()}>
          Cancel
        </button>
        <button
          className="save"
          onClick={() => {
            editEntry(input)
            closeModal()
          }}
        >
          Save
        </button>
      </div>
    </Modal>
  )
}