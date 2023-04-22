import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FormControlLabel } from '@mui/material';

import { deleteWord, checkWord, editWord } from 'redux/operations';

export default function WordsListItem({ word, index }) {
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            onChange={event =>
              dispatch(checkWord({ ...word, isChecked: event.target.checked }))
            }
            checked={word.isChecked}
          />
        }
      />

      <p>{index + 1}</p>

      {isEdit ? (
        <>
          <label>
            UKR Word:
            <input
              name="ukrWord"
              type="text"
              value={word.ukrWord}
              onChange={event =>
                dispatch(editWord({ ...word, ukrWord: event.target.value }))
              }
            />
          </label>

          <label>
            ENG Word:
            <input
              name="engWord"
              type="text"
              value={word.engWord}
              onChange={event =>
                dispatch(editWord({ ...word, engWord: event.target.value }))
              }
            />
          </label>
        </>
      ) : (
        <>
          <p>{word.ukrWord}</p>
          <p>{word.engWord}</p>
        </>
      )}

      {isEdit ? (
        <button
          type="button"
          onClick={() => {
            dispatch(editWord(word.id));
            setIsEdit(false);
          }}
        >
          Save
        </button>
      ) : (
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
      )}

      {isEdit ? (
        <button type="button" disabled>
          Delete
        </button>
      ) : (
        <button type="button" onClick={() => dispatch(deleteWord(word.id))}>
          Delete
        </button>
      )}
    </>
  );
}
