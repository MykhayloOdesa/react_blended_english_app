import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchWords } from 'redux/operations';
import { selectWords } from 'redux/selectors';
import WordsListItem from 'components/WordsListItem/WordsListItem';

export default function WordsList() {
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
          <WordsListItem word={word} index={index} />
        </li>
      ))}
    </ul>
  );
}
