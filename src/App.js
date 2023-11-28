import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useState, useEffect } from 'react';

function App() {

  const [stores, setStores] = useState([])

  
  
  // calls the loadStores function once using open brackets. NO INFINITE LOOP
  useEffect(() => {
    loadStores();
  }, []);
  
  // fetch data from db.json
  const loadStores = () => {
    fetch("http://localhost:8085/stores")
    .then((r) => r.json())
    .then((data) => setStores(data));
  };
  
  const addStore = (store) => {
    fetch("http://localhost:8085/stores", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        ...store,
        episode: parseInt(store.episode),
        season: parseInt(store.season)
      )
    })
    .then(r => r.json())
    .then(data => setStores([...stores, data]))
  }
  
  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm addStore={addStore}
      // stores={stores} setStores={setStores} newStore={newStore} setNewStore={setNewStore} 
      />
      <StoreList stores={stores} />
    </div>
  );
}

export default App;






// const [newStore, setNewStore] = useState({
//   name: '',
//   image: '',
//   season: 0,
//   episode: 0
// })