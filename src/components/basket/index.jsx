import './style.css';
import React from 'react';
import { GrTrash } from "react-icons/gr";

const Basket = (props) => {
    const handleDeleteItem = (itemId) => {
        const updatedList = props.basketlist.filter(item => item.productid !== itemId);
        props.setBasketlist(updatedList);
    }
    return (
        <div className='basket-item d-flex justify-content-start flex-column align-items-center bg-light h-100'>
                {props.basketlist && props.basketlist.map(item => {
                    return(
                        <div key={`basketlist-product-${item.productid}`} className='w-100 p-3'>
                        <img src={item.img} alt="" className='img'/>
                            <div className='d-flex justify-content-between flex-column'>
                                <div className='item-details d-flex align-items-center mt-2'>
                                    <h6 className='product-title w-50'>{item.ProductTitle}</h6>
                                </div>
                                <div className='d-flex justify-content-between align-items-center mt-2'>
                                    <h5 className=''>${item.ProductPrice}</h5>
                                    <button className='button d-flex justify-content-center align-items-center margin' onClick={() => handleDeleteItem(item.productid)}><GrTrash/></button>
                                </div>
                            </div>
                         </div>
                    )
                })}
                <div>
                    <h5 className='total'>${props.basketlist.reduce((total, item) => total + item.ProductPrice, 0)}</h5>
                    <button className='button'>clearing</button>
                </div>
        </div>
    );
}

export default Basket;
