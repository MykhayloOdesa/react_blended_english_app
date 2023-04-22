import React from 'react';
// import { useDispatch } from 'react-redux';

// import { deleteWord } from 'redux/operations';

export default function WordForm({ word, index }) {
  // const dispatch = useDispatch();

  return (
    <>
      <label>
        UKR Word
        <input type="text" name="ukrWord" onChange={() => {}} />
      </label>

      <label>
        ENG Word
        <input type="text" name="engWord" onChange={() => {}} />
      </label>

      <button type="button" onClick={() => {}}>
        Delete
      </button>
    </>
  );
}
