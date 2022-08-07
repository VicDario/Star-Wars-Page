import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppContext from '@context/AppContext';

const Home = lazy(() => import('@pages/Home'));

function App() {
  return (
    <AppContext.Provider>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Suspense>
                <Home></Home>
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
