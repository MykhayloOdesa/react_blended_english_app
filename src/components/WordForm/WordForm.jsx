import React from 'react';
import { useDispatch } from 'react-redux';

import { addWord } from 'redux/operations';

export default function WordForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const ukrWord = event.currentTarget.ukrWord.value;
    const engWord = event.currentTarget.engWord.value;

    dispatch(
      addWord({
        ukrWord,
        engWord,
      })
    );

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UKR Word
        <input type="text" name="ukrWord" />
      </label>

      <label>
        ENG Word
        <input type="text" name="engWord" />
      </label>

      <button type="submit">Add Word</button>
    </form>
  );
}
