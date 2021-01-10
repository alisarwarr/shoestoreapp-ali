import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { useHistory } from "react-router-dom";
import Head from '../Head';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { added, removed, quited } from '../redux/basket/actions.js';

function Details() {
    const basket = useSelector(state => state.basketReducer);
    const itemId = useSelector(state => state.itemIdReducer.itemId);
    const dispatch = useDispatch();

    const itemFormBasket = basket[itemId - 1];                           //grap only that id's object from multiple objects in initailState array & (-1 bcz array starts from 0 start)
    const {
        id,
        pic,
        name,
        about,
        quantity,
        price,
    } = itemFormBasket;

    let itemBill = quantity * price;                                     //grap bill by 'quantity * by its price'

    let eachBill = basket.map(item => (item.quantity * item.price));     //grap each 'quantity * by its price' from all objects
    let sumEachBill = eachBill.reduce((sum, num) => sum + num);          //reduce returns 'sum' of an array

    const [ clicked, setClicked ] = useState(false);                     //for again render to get updated data

    const history = useHistory();

    return (
        <div className="details">
            <Head title={`${name} Details`}/>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4" id="name"> {name.toUpperCase()} </h1>
                    <p className="lead" id="about"> {about} </p>
                    <hr className="my-4"/>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "-0.75rem"
                        }}
                        className="flexDirectionCol550"
                    >
                        <table className="table table-hover table-sm">
                            <tbody>
                                <tr> <p> Its available market price is <b>${price}</b> without discount. </p> </tr>
                                {quantity > 0 ? (
                                    <>
                                        <tr> <p> You have booked <b>{name}</b> product in <b>{quantity}</b> quantity. </p> </tr>
                                        <tr> <p> Your bill for <b>{name}</b> product is <b>${itemBill}</b> only. </p> </tr>
                                        <tr> <p> Your bill for other products except <b>{name}</b> is <b>${sumEachBill - itemBill}</b>. </p> </tr>
                                        <tr> <p> Your total bill along with <b>{name}</b> product is <b>${sumEachBill}</b>. </p> </tr>
                                    </>
                                ): (
                                    <>
                                        <tr> <p> You haven't book <b>{name}</b> product, please book it. </p> </tr>
                                        <tr> <p> Your total bill without <del><b>{name}</b></del> product is <b>${sumEachBill}</b>. </p> </tr>
                                    </>
                                )}
                            </tbody>
                        </table>

                        <span style={{ display: "flex", alignItems: "center" }}>
                            <img
                                src={pic}
                                alt={name}
                                title={name}
                            />
    
                            <div id="btns">
                                <button
                                    className="btn btn-primary shadow-none"
                                    id="addbtn"
                                    onClick={() => {
                                        setClicked(x => !x);
                                        dispatch(added(id));
                                    }}
                                >
                                    <AddIcon/>
                                </button>
    
                                <button
                                    className="btn btn-danger shadow-none"
                                    id="removebtn"
                                    disabled={quantity === 0}
                                    onClick={() => {
                                        setClicked(x => !x);
                                        dispatch(removed(id));
                                    }}
                                >
                                    <RemoveIcon/>
                                </button>
    
                                <button
                                    className="btn btn-warning shadow-none"
                                    id="quitedbtn"
                                    disabled={quantity === 0}
                                    onClick={() => {
                                        setClicked(x => !x);
                                        dispatch(quited(id));
                                    }}
                                >
                                    <RemoveShoppingCartIcon style={{ color: "white" }}/>
                                </button>
                            </div>
                        </span>
                    </div>

                    <p className="lead">
                        <div className="container">
                            <button
                                className="btn btn-lg btn-block shadow-none"
                                id="homebtn"
                                onClick={() => history.push('/')}
                            >
                                Back To Home
                            </button>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Details;