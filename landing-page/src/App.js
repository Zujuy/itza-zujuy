// src/App.js
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Description from './components/Description/Description';
// import Experience from './components/Experience/Experience';
// import Conferences from './components/Conferences/Conferences';
// import Communities from './components/Communities/Communities';
// import Favorites from './components/Favorites/Favorites';
// import ContactForm from './components/ContactForm/ContactForm';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Description />
      {/* <Experience />
      <Conferences />
      <Communities />
      <Favorites />
      <ContactForm /> */}
    </>
  );
};

export default App;

