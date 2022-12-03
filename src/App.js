import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './App.css';
import { createStore } from 'redux';

//store -> globalized state

//action -> describes what you want to do
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}


//reducer -> describes how your actions transform your state into the next state
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
}

let store = createStore(counter);

//display it into the console
store.subscribe(() => console.log(store.getState()));

//dispatch -> execute the action
store.dispatch(increment());

store.subscribe(() => console.log(store.getState()));





function MyTitle() {
  return <>
    <h1 className='h1'>Why I'm learning react</h1>
    <h3 >This is not sarcasm</h3>
    <h3>state: {store.getState()}</h3>
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


  const cons = ["Everyone is using it 💃",
    "I'm being forced to learn it 🫵 ",
    "I love money 💰",
    "It sucks all the fun out of life 😭"
  ]
  return (

    <ul className='nav-items'>

      {cons.map(con => <li>{con}</li>)}

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

function MyCoolCounter() {

  let initial = 10;

  const [count, setCont] = React.useState(initial)

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCont(count + 1)}>Count up</button>
      <button onClick={() => setCont(count - 1)}>Count Down</button>
      <button onClick={() => setCont(initial)}>Reset</button>
    </div>
  );
}


function App() {

  return (
    <>
      <NavBar />
      <MyTitle />
      <MyList />
      <MyFooter />
      <MyCoolCounter />

    </>

  );
}


export default App;
