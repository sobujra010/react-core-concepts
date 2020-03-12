import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["sumon", "kumon", "jibon", "emon", "shuvo", "bappi"]
  const products =[
    {name:'photoShop', price:'$99.99'},
    {name:'Illustrator', price:'$60.30'},
    {name:'PDFReader', price:'$6.20'}
  ]
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person.</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }
          {
            products.map(product =><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product =><Product product={product}></Product>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() =>setCount(count - 1)}>Decrease</button>
      <br></br>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic users :{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h5>{props.product.name}</h5>
      <h4>{props.product.price}</h4>
      <button>Buy Now</button>
      
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:'2px solid Cyan', width:'400px', margin:'10px'}}>
      <h3>My Name : {props.name}</h3>
      <p>My Profession : {props.profe}</p>
    </div>
  )
}

export default App;
