import './style.css'
import { FaStore } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

const Card = (props) =>{
    return(
        <div className='container-card'>
            <div className='container-img'>
                <img src={props.img} alt="" />
            </div>
            <div className='container-description'>
                <h5>{props.ProductTitle}</h5>
                <span><FaStore/></span>
                <p className='text-secondary'>{props.ProductPlaceStore}</p>
                <span><FaRegStar /></span>
                <p className=''>{props.ProductRating}
                <span className='text-secondary'>
                    ({props.ProductRatingCount})
                </span></p>
                <div>
                    <h3>{ProductPrice}<span><FiDollarSign /></span></h3>
                    <del>{ProductDiscount}</del>
                    <button><FaPlus /></button>
                </div>
            </div>
        </div>
    )
}

export default Card