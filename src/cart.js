// import { useState } from "react";


function Cart({ne}){
    // const[count, setcount]=useState(0);

  

    return(
        <div class="container">
        <figure class="snip1418">
          <img src={ne.image} alt="dataimage" />
          <figcaption>
            <h3>{ne.title}</h3>
            <button>-</button>
            <div class="price">
            ${ne.price}
            </div>
          </figcaption>
        </figure>
        </div> 
    );

}
export default Cart;


