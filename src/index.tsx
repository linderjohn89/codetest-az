import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ResultPage } from './pages/ResultPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ShowPage } from './pages/ShowPage';
import { Layout } from './components/Layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route element={<Layout />}>
        <Route path='/' element={<ResultPage />} />
        <Route path='/:id' element={<ShowPage />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
