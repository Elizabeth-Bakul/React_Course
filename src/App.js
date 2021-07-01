import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';

const firebaseConfig = {
  apiKey: "AIzaSyCmQM5jbNdFYmMchrCpH5BDUNWLcOAa1KE",
  authDomain: "mcdonal-339d5.firebaseapp.com",
  databaseURL: "https://mcdonal-339d5-default-rtdb.firebaseio.com",
  projectId: "mcdonal-339d5",
  storageBucket: "mcdonal-339d5.appspot.com",
  messagingSenderId: "490644610935",
  appId: "1:490644610935:web:b74afc28e1b1132ec4cb72",
};
firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} firebaseDatabase={firebase.database} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
