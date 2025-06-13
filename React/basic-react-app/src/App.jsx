
import './App.css'
import Title from "./Title.jsx"
import Description from "./Description.jsx"
import Product from "./Product.jsx"
import ProductTab from "./ProductTab.jsx"
import MsgBox from "./MsgBox.jsx"



function App() {

    return  (
    <>
      <MsgBox userName="Mohit" textColor="yellow"/>
      <MsgBox userName="Raman" textColor="orange"/>
      <ProductTab/>

    </>
  );
}






export default App



