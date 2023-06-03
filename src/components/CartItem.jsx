import { ChevronDown, ChevronUp } from "../icons";
import { removeItem ,increase,decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";


// eslint-disable-next-line react/prop-types
const CartItem = ({id,img,title,amount,price}) => {
  const dispatch = useDispatch();

  const clearItem = (id) => {
    dispatch(removeItem(id))
  }
  const increaseItem =(id)=>{
    dispatch(increase({id}));
  }
  const decreaseItem = (id) =>{
    if(amount === 1 ){
      dispatch(removeItem(id))
      return;
    }
    dispatch(decrease({id}));
  }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item price">Rs:- {price}</h4>
        <button className="remove-btn" onClick={()=>{clearItem(id)}}>remove</button>
      </div>
      <div>
        <button className="amount-btn" onClick={()=>{increaseItem(id)}}>
            <ChevronUp/>
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={()=>{decreaseItem(id)}}>
            <ChevronDown/>
        </button>

      </div>
    </article>
  );
};

export default CartItem;
