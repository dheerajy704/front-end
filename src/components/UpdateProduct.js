import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


const UpdateProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            getProductDetails();

        }
    }, [])

    const getProductDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:8000/product/${params.id}`,{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result = await result.json();
        console.log(result)
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }



    const updateProduct = async () => {
        console.log(name, price, category, company)
        let result = await fetch(`http://localhost:8000/product/${params.id}`, {

            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result = await result.json()
        console.log(result)
        navigate('/')
    }

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input type="text" placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }} />
            <input type="text" placeholder='Enter product price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }} />
            <input type="text" placeholder='Enter product category' className='inputBox'
                value={category} onChange={(e) => { setCategory(e.target.value) }} />
            <input type="text" placeholder='Enter product company' className='inputBox'
                value={company} onChange={(e) => { setCompany(e.target.value) }} />
            <button onClick={updateProduct} className='appbutton'>Update Product</button>
            <Link to="/">
            <button  className='appbutton'>Cancel</button>
            </Link>


        </div>
    )
}

export default UpdateProduct