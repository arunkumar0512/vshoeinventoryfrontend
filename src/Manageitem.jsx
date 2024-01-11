// import React from 'react';
// import axios from 'axios';
// import useProducts from './Useproduct.jsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import './Manageitem.css'

// const Manageitem = () => {
//     const [products] = useProducts();
//     const navigate = useNavigate();

//     const handleRemove = id => {
//         const proceed = window.confirm('Are You Sure to Delete?');
//         if (proceed) {
//             fetch(`http://localhost:4001/api/delete/product/${id}`, {
//                 method: 'DELETE',
//             })
//                 .then(res => {
                    
//                     window.location.reload()
                    
                    
                    
//                     res.json()})
//                 .then(data => {
//                     toast('Product Successfully Deleted', data);
//                 })
//         }
//     }

//     const navigateAddItem = () => {
//         navigate('/Additem');
//     }
//     return (
//         <div>
//             <h1 style={{marginTop:'200px'}}>Inventory Management Page</h1>
//             <div className='table-container'>
//                 <table className='table'>
//                     <thead>
//                         <tr style={{fontSize:'50px'}}>
//                             <th>Name</th>
//                             <th>size</th>
//                             <th>size</th>
//                             <th>quantity</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             products.map((product) => {
//                                 return (
//                                     <tr key={product._id}>
//                                         <td>{product.name}</td>
//                                         <td>{product.size}</td>
//                                         <td>{product.size}</td>
//                                         <td>{product.quantity}</td>
                                        
//                                         <td><button onClick={() => handleRemove(product._id)}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button></td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </table>

//             </div>
//             <button onClick={navigateAddItem} className='btn btn-success' style={{ backgroundColor:'grey'}}>Add new item</button>
//         </div>
//     );
// };

// export default Manageitem;   



import React from 'react';
import axios from 'axios';
import useProducts from './Useproduct.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Manageitem.css'

const Manageitem = () => {
    const [products] = useProducts();
    const navigate = useNavigate();

    const handleRemove = id => {
        const proceed = window.confirm('Are You Sure to Delete?');
        if (proceed) {
            fetch(`https://vshoeinventorybackend.onrender.com/api/delete/product/${id}`, {
                method: 'DELETE',
            })
                .then(res => {
                  window.location.reload()  
                    
                    
                    res.json()})
                .then(data => {
                    toast('Product Successfully Deleted', data);
                })
        }
    }

    const navigateAddItem = () => {
        navigate('/Additem');
    }
    return (
        <div >
           
            <div  style={{marginLeft:'250px',marginTop:'200px'}}   className='table-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th style={{fontSize:'30px',fontWeight:"500"}}>Name</th>
                           <th style={{fontSize:'30px',fontWeight:"500"}} >Price</th>
                           
                            <th style={{fontSize:'30px',fontWeight:"500"}}>Quantity</th>
                            <th style={{fontSize:'30px',fontWeight:"500"}}>Size</th>
                            <th style={{fontSize:'30px',fontWeight:"500"}}>Type</th>
                            <th style={{fontSize:'30px',fontWeight:"500"}}>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => {
                                return (
                                    <tr key={product._id}>
                                        <td>{product.name}</td>
                                        
                                        
                                      <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.image}</td>
                                        <td title={product.description}>{product.description.slice(0, 50) + '...'}</td>
                                        <td><button style={{marginLeft:'30px', color:"azure", backgroundColor:"red"}} onClick={() => handleRemove(product._id)}><FontAwesomeIcon icon={faXmarkSquare}></FontAwesomeIcon></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div  >
            <button onClick={navigateAddItem}  style={{marginLeft:'250px'}}className='btn btn-success'>Add new item</button>
        </div>
    );
};

export default Manageitem;