import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyBpQ322G-UE5W0g2A_J_kJkLaBSLL65Pfg",
  authDomain: "mcdonalds-fbf10.firebaseapp.com",
  projectId: "mcdonalds-fbf10",
  storageBucket: "mcdonalds-fbf10.appspot.com",
  messagingSenderId: "647540580699",
  appId: "1:647540580699:web:85513330bc763b5b9c3a7e"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
