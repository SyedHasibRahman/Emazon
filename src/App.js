import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useStateValue } from './Components/StateProvider/StateProvider';
import Payment from './Components/Payment/Payment';

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log('This user is:', user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        dispatch({
          type: 'SET_USER',
          user: user
        })
        // ...
      } else {
        // User is signed out
        // ...
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, [])
  return (
    <div className="app">
      {/* <h1>Welcome to Amazon Clone </h1> */ }


      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/checkout" element={ <CheckOut /> } />
          <Route path="/payment" element={ <Payment /> } />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
