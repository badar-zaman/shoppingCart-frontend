import React,{useState, useEffect} from "react";
import axios from "axios";



 const UserProducts =() => {

 const [products, setProducts] = useState([])

  const fetchProducts = () => {
    axios.get("http://localhost:8181/api/v1/lego").then(res =>{
        setProducts(res.data)
    });

  }

  useEffect(() =>{
    fetchProducts()
  },[]);

  const addProduct = (props) => {
        console.log('helloooo  ' + props)
  }

  }

  return products.map((product, index) =>{
    return(
        <div>
           <div key={index}>
            <h4>Product: {product.name}  Price: £{product.price}</h4>
            <button onClick={() => addProduct(product.id)}> Add Product</button>
            </div>
        </div>
    )
  });

}

export default UserProducts;