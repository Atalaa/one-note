import React from 'react';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './data/notes';

const App = () => {
  return (
    <div>
      <Header />

      {
        notes.map(item => {
          return (
            <Note key={item.key} title={item.title} content={item.content}/>
          )
        })
      }
      
      <Footer />
    </div>
  );
};

export default App;
