import { useReducer, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  // const [state, dispatch] = useReducer(counterReducer, initialState);
  // const { counter, history } = state;

  return (
    <>
      <h1>Use Reducer</h1>
      <p>COUNTER: {counter}</p>
      <button
        onClick={() => increment(counter, setCounter, history, setHistory)}
        // onClick={() => dispatch({ type: 'increment' })}
      >
        Increment
      </button>
      <button
        onClick={() => decrement(counter, setCounter, history, setHistory)}
      >
        Decrement
      </button>
      <button onClick={() => reset(counter, setCounter, history, setHistory)}>
        Reset
      </button>
      <button onClick={() => setTo10(counter, setCounter, history, setHistory)}>
        Set to 10
      </button>
      <p>HISTORY: {history.join(',')}</p>
    </>
  );
};

const increment = (counter, setCounter, history, setHistory) => {
  console.log('Counter antes', counter);
  setCounter(counter + 1);
  console.log('Counter después', counter);

  console.log('history antes', history);
  setHistory([...history, counter + 1]);
  console.log('history después', history);
};

const decrement = (counter, setCounter, history, setHistory) => {
  setCounter(counter - 1);
  setHistory([...history, counter - 1]);
};

const reset = (counter, setCounter, history, setHistory) => {
  setCounter(0);
  setHistory([...history, counter]);
};

const setTo10 = (counter, setCounter, history, setHistory) => {
  setCounter(10);
  setHistory([...history, counter]);
};

export default App;

const initialState = { counter: 0, history: [] };

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
        history: [...state.history, state.counter]
      };

    case 'decrement':
      return {
        counter: state.counter - 1,
        history: [...state.history, state.counter]
      };

    case 'reset':
      return {
        counter: 0,
        history: [...state.history, state.counter]
      };

    case 'setTo':
      return {
        counter: action.payload,
        history: [...state.history, state.counter]
      };

    default:
      throw new Error('Unknow Action');
  }
};
