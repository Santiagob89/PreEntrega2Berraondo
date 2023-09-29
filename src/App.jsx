import IndexHeader from "../src/Components/Header/IndexHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../src/Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/Components/ItemDetaileContainer/ItemDetaileContainer";



function App() {

  return (
    <>
      <BrowserRouter>
        <IndexHeader/>
        <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/categoria/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
