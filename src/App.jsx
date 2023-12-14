import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos' />}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos Filtrados por categoria' />}></Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
      </Routes>      
      {/* ... Otros componentes o contenido ... */}
    </BrowserRouter>
  );
}

export default App;