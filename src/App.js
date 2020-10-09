import React from 'react';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote'

const App = () => {
  return (
    <div>
      <Header />
      <CreateNote />
      <Note key={1} title="note title" content="note content"/>    
      <Footer />
    </div>
  );
};

export default App;
