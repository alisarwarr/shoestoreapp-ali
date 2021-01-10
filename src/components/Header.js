import React from 'react';
import ShoppingBasketIcon from './ShoppingBasketIcon';
import useWebAnimation from '@wellyshen/use-web-animations';
import { useHistory } from "react-router-dom";
//REDUX
import { useSelector } from 'react-redux';

function Header() {
    const basket = useSelector(state => state.basketReducer);

    let eachQuantity = basket.map(item => item.quantity);                //grap each 'quantity' from all objects
    let sumEachQuantity = eachQuantity.reduce((sum, num) => sum + num);  //reduce returns 'sum' of an array

    const { ref } = useWebAnimation({
        keyframes: [
            { transform: 'scale(1)' },
            { transform: 'scale(1.1)' },
            { transform: 'scale(1)' },
        ],
        timing: {
            duration: 3000,
            iterations: Infinity
        }
    })

    const history = useHistory();

    return (
        <nav className="navbar navbar-expand-md sticky-top">
            <div className="container">
                <span className="navbar-brand" id="title"> Shoe Store </span>

                <span onClick={() => history.push('/basket')} ref={ref}>
                    <ShoppingBasketIcon
                        value={sumEachQuantity}
                        color="black"
                    />                    
                </span>
            </div>
        </nav>
    )
}

export default Header;