import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar.jsx'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'




function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          {/* Rutas a configurar */}
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
