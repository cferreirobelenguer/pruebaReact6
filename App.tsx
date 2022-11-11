import * as React from 'react';
import './style.css';
import List from './components/List';
import {ListaProvider} from './context/ListaProvider'
export default function App() {
  return (
    <ListaProvider>
      <List></List>
    </ListaProvider>
  );
}
