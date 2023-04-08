import { Checkbox, FormControlLabel } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWord, fetchWords, checkWord } from 'redux/operations';
import { selectWords } from 'redux/selectors';

export default function WordsList() {
  const dispatch = useDispatch();
  const words = useSelector(selectWords);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchWords(controller.signal));

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <ul>
      {words.map((word, index) => (
        <li key={word.id}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={event =>
                  dispatch(
                    checkWord({ ...word, isChecked: event.target.checked })
                  )
                }
                checked={word.isChecked}
              />
            }
          />
          <p>{index + 1}</p>
          <p>{word.ukrWord}</p>
          <p>{word.engWord}</p>
          <button type="button" onClick={() => dispatch(deleteWord(word.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
