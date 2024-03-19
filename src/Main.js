import { useState } from 'react';
import Header from './Header'

export default function Main() {
  
let [product, setProducts] = useState([
  {name: 'product 1', description: 'some description here'},
  {name: 'product 2', description: 'some description here'},
  {name: 'product 3', description: 'some description here'}
])

let [searchProducts, setSearchProducts] = useState(false)

function search(e) {
  let searchTerm = (e.target.value.toLowerCase()).trim()
  const pattern = new RegExp(searchTerm);
  let f = product.filter((singleProduct) => pattern.test(singleProduct.name) || pattern.test(singleProduct.description))
  console.log(f)
  setSearchProducts(f)
}

  let [show, setShow] = useState(true)

  function myFn() {
    console.log('working..')
    setShow(!show)
  }
  
  return ( 
    <>
    <Header fn={search} />
    <div className="container mt-5 ">
      <button className='btn btn-primary mb-5' onClick={() => myFn()}>
        {show ? 'hide' : 'show'}
      </button>
       <div className='d-flex gap-4'>
        { searchProducts || product?.map((singleProduct)=> (
          <div class="card">
            <img class="card-img-top" src="https://via.placeholder.com/300/?text=Product" alt="Title" />
            <div class="card-body">
              <h4 class="card-title">{singleProduct.name}</h4>
              <p class="card-text">{singleProduct.description}</p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
    </>
   );
}