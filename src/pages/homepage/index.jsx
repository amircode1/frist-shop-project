import Card from '../../components/card/index'
import './style.css'
import {fetchData} from '../../DataProduct/index'

const HomePage = () =>{
    return(
        <div className=''>
            <div className='d-flex flex-wrap'>
                {fetchData.map(item => {
                    return(
                    <div key={`productList${item.id}`}>
                        <Card
                img = {item.image}
                ProductTitle ={item.title}
                ProductPlaceStore ={item.category}
                ProductRating = {item.rating.rate}
                ProductRatingCount = {item.rating.count}
                ProductPrice = {item.price}
                ProductDiscount = ''
            />
                    </div>    
                    )
                })}
            </div>
        </div>
    
    )
}

export default HomePage