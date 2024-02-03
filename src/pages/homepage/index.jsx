import Card from '../../components/card/index'
import './style.css'
import { fetchData } from '../../DataProduct/index'
import { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = () =>{
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((data) =>{
            console.log(data.data)
            setProductList(data.data)
        })
        .catch((error) => console.log(error))
        
    },[])

    return (
        <div className=''>
            <div className='d-flex flex-wrap'>
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
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage
