import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addWord } from 'redux/operations';

import WordForm from 'components/WordForm/WordForm';

export default function WordFormList() {
  const [counter, setCounter] = useState(0);
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
      {Array.from(Array(counter)).map((word, index, array) => {
        return (
          <span key={index} style={{ display: 'block' }}>
            <WordForm word={word} index={index} array={array} />
          </span>
        );
      })}

      <span style={{ display: 'block' }}>
        <button type="button" onClick={() => setCounter(counter + 1)}>
          Add One More Word
        </button>

        <button type="submit">Add All Words To Table</button>
      </span>
    </form>
  );
}
