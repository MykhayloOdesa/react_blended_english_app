import React from 'react';

export default function WordFormItem({ word, index, array }) {
  return (
    <>
      <label>
        UKR Word
        <input
          type="text"
          name="ukrWord"
          placeholder="Ukrainian Word..."
          onChange={() => {}}
        />
      </label>

      <label>
        ENG Word
        <input
          type="text"
          name="engWord"
          placeholder="English Word..."
          onChange={() => {}}
        />
      </label>

      <button type="button" onClick={() => console.log(index)}>
        Delete
      </button>
    </>
  );
}
