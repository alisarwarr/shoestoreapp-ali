import React from 'react';
import './Style.scss';

function ShoppingQuantityIcon({ value, color }) {    
    return (
        <div className="ShoppingQuantityBadge">
            <i
                className="fa fa-shopping-cart"
                style={{ color: color, fontSize: "2.15rem" }}
            >
            </i>
            
            <span> {value} </span>
        </div>
    )
}

export default ShoppingQuantityIcon;