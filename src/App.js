import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useState, useEffect } from 'react';

function App() {

  const [stores, setStores] = useState([])

  const [newStore, setNewStore] = useState({
    name: '',
    image: '',
    season: 0,
    episode: 0
  })



  useEffect(() => {
    loadStores();
  }, []);

  const loadStores = () => {
    fetch("http://localhost:8085/stores")
      .then((r) => r.json())
      .then((data) => setStores(data));
  };



  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm stores={stores} setStores={setStores} newStore={newStore} setNewStore={setNewStore} />
      <StoreList stores={stores} />
    </div>
  );
}

export default App;
