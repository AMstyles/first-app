import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './App.css';

function MyTitle() {
  return <>
    <h1 className='h1'>Why I'm learning react</h1>
    <h3 >This is not sarcasm</h3>
  </>;
}

function NavBar() {
  return (<nav className='nav' >

    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLOkdHWDMxCeNt3fdbCcAIcDwwsQCVPKB9w&usqp=CAU' alt="logo" height='40px ' />
    <ul className='nav-links'>
      <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Home</a></li>
      <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">About</a></li>
      <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contact</a></li>
    </ul>

  </nav>);
}
function MyList() {
  return (

    <ul className='nav-items'>
      <li>Everyone is using it 💃</li>
      <li>I'm being forced to learn it 🫵</li>
      <li>I love money 💰</li>
      <li>It sucks all the fun in life 😭</li>
    </ul>

  );
}

function MyFooter() {
  return (
    <footer className='footer'>
      <small>
        <p>©2021 AMstyles All Rights Reserved</p>
      </small>
    </footer>
  );
}


function App() {



  return (
    <>
      <NavBar />
      <MyTitle />
      <MyList />
      <MyFooter />

    </>

  );
}


export default App;
