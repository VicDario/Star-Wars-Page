import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppContext from '@context/AppContext';
import useAppState from '@hooks/useAppState';

const Home = lazy(() => import('@pages/Home'));

function App() {
  const appState = useAppState({});
  return (
    <AppContext.Provider value={appState}>
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
