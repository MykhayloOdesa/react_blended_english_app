import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox, FormControlLabel } from '@mui/material';

import { deleteWord, fetchWords, checkWord, editWord } from 'redux/operations';
import { selectWords } from 'redux/selectors';

export default function WordsList() {
  const [isEdit, setIsEdit] = useState(false);
  const words = useSelector(selectWords);

  const dispatch = useDispatch();

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

              <button
                type="button"
                onClick={() => {
                  dispatch(editWord({ ...word, id: word.id }));
                  setIsEdit(false);
                }}
              >
                Save
              </button>

              <button type="button" disabled>
                Delete
              </button>
            </>
          ) : (
            <>
              <p>{word.ukrWord}</p>
              <p>{word.engWord}</p>

              <button type="button" onClick={() => setIsEdit(true)}>
                Edit
              </button>

              <button
                type="button"
                onClick={() => dispatch(deleteWord(word.id))}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

// return (
//   <ul>
//     {words.map((word, index) => {
//       return isEdit ? (
//         <li key={word.id}>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 onChange={event =>
//                   dispatch(
//                     checkWord({ ...word, isChecked: event.target.checked })
//                   )
//                 }
//                 checked={word.isChecked}
//               />
//             }
//           />

//           <p>{index + 1}</p>

//           <label>
//             UKR Word:
//             <input
//               name="ukrWord"
//               type="text"
//               value={word.ukrWord}
//               onChange={event =>
//                 dispatch(editWord({ ...word, ukrWord: event.target.value }))
//               }
//             />
//           </label>

//           <label>
//             ENG Word:
//             <input
//               name="engWord"
//               type="text"
//               value={word.engWord}
//               onChange={event =>
//                 dispatch(editWord({ ...word, engWord: event.target.value }))
//               }
//             />
//           </label>

//           <button
//             type="button"
//             onClick={() => {
//               dispatch(editWord({ ...word, id: word.id }));
//               setIsEdit(false);
//             }}
//           >
//             Save
//           </button>

//           <button type="button" disabled>
//             Delete
//           </button>
//         </li>
//       ) : (
//         <li key={word.id}>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 onChange={event =>
//                   dispatch(
//                     checkWord({ ...word, isChecked: event.target.checked })
//                   )
//                 }
//                 checked={word.isChecked}
//               />
//             }
//           />
//           <p>{index + 1}</p>
//           <p>{word.ukrWord}</p>
//           <p>{word.engWord}</p>
//           <button type="button" onClick={() => setIsEdit(true)}>
//             Edit
//           </button>
//           <button type="button" onClick={() => dispatch(deleteWord(word.id))}>
//             Delete
//           </button>
//         </li>
//       );
//     })}
//   </ul>
// );
