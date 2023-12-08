// fetch => return response object
import React, { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState([])

    // let res = fetch('https://dummyjson.com/product');
    // console.log(res);  ///   promise

    useEffect(() => {
        fetch('https://dummyjson.com/product')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error fetching products:', error));

    }, []);
    // console.log(products);
    // console.log(data.products);
    // myData.products.length = 10;

    // console.log(product);
    // const productDiv = document.createElement('div');
    // const barnd = document.createElement('h1');
    // const desc = document.createElement('p')
    // const discount = document.createElement('p');
    // const rate = document.createElement('p')
    // const prodImg = document.createElement('img');

    return (
        <div><h1>Products</h1>
            <div className="container ">
                {products.map(product =>
                    <div className='product' key={product.id}>
                        <h1>{product.brand}</h1>
                        <p>{product.description}</p>
                        <p>Discount :{product.discountPercentage}</p>
                        <p>rate : {product.rating}</p>
                        <img src={product.thumbnail} alt={product.brand} />
                    </div>)}
            </div>

        </div>)

    // <div className="container">
    //     <div>
    //         <h1>{product.brand}</h1>
    //         <p>{product.description}</p>
    //         <p>Discount :{product.discountPercentage}</p>
    //         <p>rate : {product.rating}</p>
    //     </div>
    // </div>)

    // barnd.textContent = `${product.brand}`
    // desc.textContent = `${product.description}`
    // discount.innerHTML = `Dicount : <span>${product.discountPercentage}</span>`
    // rate.textContent = `rate : ${product.rating}`
    // prodImg.setAttribute('src', product.thumbnail);
    // productDiv.append(prodImg, barnd, desc, discount, rate);
    // productDiv.classList.add('student')
    // container.appendChild(productDiv)

}


export default Products;