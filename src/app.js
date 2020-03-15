/* eslint-disable no-unused-vars */
import React from 'react';
import ToDo from './components/todo/todo-connected.js';
import Header from './components/todo/header.js';
import Footer from './components/todo/footer.js';
import SettingsProvider from './components/context/context.js';
import LoginContext from './components/auth/context.js';
import Login from './components/auth/login.js';
import Auth from './components/auth/auth.js';

const Edit = props => {
  return (
    <Auth capability="update">
      <span>You can edit!</span>
      <SettingsProvider>
        <Header />
        <ToDo />
        <Footer />
      </SettingsProvider>
    </Auth>
  );
};

const Delete = props => {
  return (
    <Auth capability="delete">
      <span>You can delete!</span>
      <SettingsProvider>
        <Header />
        <ToDo />
        <Footer />
      </SettingsProvider>
    </Auth>
  );
};
function App (){
  return (
    <>
      <LoginContext>
        <Login />
        <Edit />
        <Delete />
      </LoginContext>
    </>
  );
}
export default App;