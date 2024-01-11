// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import './Additem.css';

// const Additem = () => {
//     const { register } = useForm();
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const name = event.target.name.value;
//         const price = event.target.price.value;
//         const price = event.target.price.value;
//         const quantity = event.target.quantity.value;

//         const product = { name, price, price, quantity };

//         fetch('http://localhost:4001/api/product', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify(product),
//         })
//             .then((res) => {
//                 event.target.name.value = '';
//                 event.target.price.value = '';

//                 event.target.price.value = '';
//                 event.target.quantity.value = '';
//                 res.json();
//             })
//             .then((result) => {
//                 toast('New Item Successfully Inserted', result);
//             });
//     };

//     const navigateManageItem = () => {
//         navigate('/Manageitem');
//     };

//     return (
//         <div className="form-container">
//             <form onSubmit={handleSubmit}>
//                 <input className="form-input" {...register('name')} placeholder="Product name" required />
//                 <br />

//                 <input className="form-input" type="number"{...register('price')} placeholder="price" required />
//                 <br />

//                 <input className="form-input" type="number" {...register('price')} placeholder="price" />
//                 <br />

//                 <input className="form-input" type="number" {...register('quantity')} placeholder="Quantity" required />
//                 <br />

//                 <input className="form-button" type="submit" value="Add Item" />

//                 <button className="go-to-inventory" onClick={navigateManageItem}>
//                     Go to Inventory
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Additem;

import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./Additem.css";
import { useNavigate } from "react-router-dom";

const Additem = () => {
  const navigate = useNavigate();
  const { register } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;

    const product = { name, image, description, price, quantity };

    fetch("https://vshoeinventorybackend.onrender.com/api/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        event.target.name.value = "";
        event.target.image.value = "";
        event.target.description.value = "";
        event.target.price.value = "";
        event.target.quantity.value = "";

        res.json();
      })
      .then((result) => {
        toast("New Item Succesfully Inserted", result);
      });
  };

  const move = () => {
    navigate("/Manageitem");
  };

  return (
    <div>
      <div className="mb-5">
        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            style={{ borderWidth: "5px", borderColor: "black" }}
            className="mb-3 w-50"
            {...register("name")}
            placeholder="Enter the Name of the Product"
            required
          />{" "}
          <br />
          <input
            style={{ borderWidth: "5px", borderColor: "black" }}
            className="mb-3 w-50"
            type="number"
            {...register("price")}
            placeholder="Price of one Item"
          />{" "}
          <br />
          <input
            style={{ borderWidth: "5px", borderColor: "black" }}
            className="mb-3 w-50"
            {...register("image")}
            placeholder="Enter the size"
          />{" "}
          <br />
          <input
            style={{ borderWidth: "5px", borderColor: "black" }}
            className="mb-3 w-50"
            {...register("description")}
            placeholder="type"
          />
          <br />
          <input
            style={{ borderWidth: "5px", borderColor: "black" }}
            className="mb-3 w-50"
            type="number"
            {...register("quantity")}
            placeholder="Number of items in stock"
            required
          />{" "}
          <br />
          <input
            style={{ width: "200px" }}
            className="btn btn-dark"
            type="submit"
          />{" "}
          <br />
          <br />
          <button onClick={move} className="btn btn-success">
            Back to Inventory Page
          </button>
        </form>
      </div>
    </div>
  );
};

export default Additem;
