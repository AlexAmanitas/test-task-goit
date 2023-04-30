import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from 'components/AppBar';
import Home from 'pages/Home';
import Cards from 'pages/Cards';
import Tweets from 'pages/Tweets';

// const Cards = lazy(() => import('pages/Cards'));
// const Tweets = lazy(() => import('pages/Tweets'));

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/test-task-goit" element={<Home />}></Route>
          <Route path="/test-task-goit/cards" element={<Cards />}></Route>
          <Route path="/test-task-goit/tweets" element={<Tweets />}>
            {/* <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
