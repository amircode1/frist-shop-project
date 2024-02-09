import Card from '../../components/card/index'
import './style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Basket from '../../components/basket'

const HomePage = () =>{
    const [productList, setProductList] = useState([]);
    const [basketlist , setBasketlist] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((data) =>{
            console.log(data.data)
            setProductList(data.data)
        })
        .catch((error) => console.log(error))
        
    },[])
    
    return (
        <div className='d-flex m-0 w-100'>
            <div className='d-flex flex-wrap container-card w-75 h-100'>
                {productList.map(item => (
                    <div key={`productList${item.id}`}>
                        <Card
                            img={item.image}
                            ProductTitle={item.title}
                            ProductPlaceStore={item.category}
                            ProductRating={item.rating.rate}
                            ProductRatingCount={item.rating.count}
                            ProductPrice={item.price}
                            ProductDiscount=''
                            basketlist={basketlist}
                            setBasketlist={setBasketlist}
                            productid={item.id}
                        />
                    </div>
                ))}
            </div>
            <div className='d-flex justify-content-end align-items-center h-100 w-25 basket'>
                <Basket
                    basketlist={basketlist}
                    setBasketlist={setBasketlist}
                    
                />
            </div>
        </div>
    );
}

export default HomePage
