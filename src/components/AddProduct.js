import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate()

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [error, setError] = React.useState(false)
  const addProduct = async () => {

    console.warn(!name);
    if (!name || !price || !category || !company) {
      setError(true)
      return false;
    }



    // console.warn(name,price,category,company);
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("http://localhost:8000/add-product", {
      method: 'post',
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    if (result) {
      navigate('/')
    }
    console.log(result)
    // console.warn(userId._id);
  }

  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input type="text" placeholder='Enter product name' className='inputBox'
        value={name} onChange={(e) => { setName(e.target.value) }} />

      {error && <span className='invalid-input'>Enter valid name</span>}

      <input type="text" placeholder='Enter product price' className='inputBox'
        value={price} onChange={(e) => { setPrice(e.target.value) }} />
      <input type="text" placeholder='Enter product category' className='inputBox'
        value={category} onChange={(e) => { setCategory(e.target.value) }} />
      <input type="text" placeholder='Enter product company' className='inputBox'
        value={company} onChange={(e) => { setCompany(e.target.value) }} />
      <button onClick={addProduct} className='appbutton'>Add Product</button>

    </div>
  )
}

export default AddProduct