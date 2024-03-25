import './App.css';
import CardList from './components/cardList/CardList';
import Search from './components/search/Search';

const App = () => {
  return (
    <div className="App">
      <Search />
      <CardList />
    </div>
  );
}

export default App;
