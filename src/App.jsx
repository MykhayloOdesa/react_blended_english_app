import Navigation from 'components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Learn from 'pages/Learn';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/learn" element={<Learn />} />
      </Route>
    </Routes>
  );
}
