import { stockData } from './data';
import { useState } from 'react';
import Cart from "./cart"


import './App.css';


function App() {
  const[val,setval]=useState(true);
  const[print, setprint]=useState("");
  
  const[vale, setVale]=useState([]);

  // useEffect(() => {
  //   setVal(value.map(values => ({
  //     id: values.id,
  //     title: values.title,
  //     price: values.price,
  //   })));
  // }, [value]);
function printing(data){
  setVale(vale.concat(data))
  
  setprint(data)
  setval(false)
}


  // function warning(){

  //   alert("Added to cart")
  //   setval(val+1)  {val}

  
  // }
  // function onchangehandle(data){
  //   setprint(data.title)
  // }

  return (
    <div className="App">
      <button onClick={()=>setval(false)}><h3>cart</h3></button>
      <button onClick={()=>setval(true)}><h3>home</h3></button>
      { val ?
        <div className="stock-container">
          {stockData.map((data, keys) => {
          return (

            <div keys={data.id}>
            <figure class="snip1418">

              
              <img src={data.image} alt="dataimage" />
              <div class="add-to-cart"> <i class="ion-android-add"></i><span onClick={printing}>Add to Cart</span></div>
              <figcaption>
                <h3>{data.title} </h3>
                <p>{data.description }</p>
                <div class="price">
                ${data.price}
                </div>
                <div class="rating">
                <p>rate:{data.rating.rate}</p>
                <p>count:{data.rating.count}</p>

                </div>
              </figcaption>
            </figure>
            </div>
          );}
          )
          }
          
        </div>:
    <Cart value={print} ne={vale}/>}
    </div>
 );
}

export default App;
