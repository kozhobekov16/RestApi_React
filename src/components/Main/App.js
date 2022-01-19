import React from 'react'
import { Routes, Route } from 'react-router-dom'
//Pages
import HomePage from '../../pages/homepage/HomePage';
import Show from '../../pages/show/Show';
import Register from '../../pages/register/Register';
import SignIn from '../../pages/signIn/SignIn';
import People from '../../pages/people/People';
// import SearchPage from '../../pages/searchPage/SearchPage';
//components 
import Header from '../header/Header'
function App() {
  const routes = [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/resister',
      element: <Register />
    },
    {
      path: '/signIn',
      element: <SignIn />
    },
    {
      path: '/show',
      element: <Show />
    },
    {
      path: '/stars',
      element: <People />
    },
  ]
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((elem, i) => {
          return (
            <Route key={i} path={elem.path} element={elem.element} />
          )
        })}
      </Routes>
      {/* <SearchPage/> */}
    </div>
  );
}

export default App;
