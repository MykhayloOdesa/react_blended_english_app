import React from 'react';

import WordsList from 'components/WordsList/WordsList';
import WordForm from 'components/WordForm/WordForm';

export default function Home() {
  return (
    <>
      <WordForm />
      <WordsList />
    </>
  );
}
