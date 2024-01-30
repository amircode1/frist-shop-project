import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStore } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

const Card = (props) =>{
    return(
        <div className='container-card'>
            <div className='container-img d-flex justify-content-center align-items-center'>
                <img src={props.img} alt="" />
            </div>
            <div className='container-description'>

                <h6>{props.ProductTitle}</h6>
                <span className='d-inline'><FaStore/></span>
                <p className='text-secondary m-0 d-inline'>{props.ProductPlaceStore}</p>

                <div className='d-flex justify-content-start align-items-center mt-1'>
                    <span className='d-flex align-items-center size'><FaStar /></span>
                    <p className='m-0 d-inline-flex'>{props.ProductRating}
                    <span className='text-secondary m-0'>
                    ({props.ProductRatingCount}نظر)
                    </span></p>
                </div>
                
                <div className='d-flex justify-content-between'>
                    <h3 className='d-flex mt-2'>{props.ProductPrice}<span><FiDollarSign /></span></h3>
                    <del>{props.ProductDiscount}</del>
                    <button className='button'><span><FaPlus /></span></button>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;