import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import SendIcon from '@material-ui/icons/Send';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from "react-router-dom";
import Head from '../Head';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { added, removed, quited, reset } from '../redux/basket/actions.js';
import { clickedItemID } from '../redux/itemId/actions.js';

function Basket() {
    const basket = useSelector(state => state.basketReducer);
    const dispatch = useDispatch();

    let eachQuantity = basket.map(item => item.quantity);                //grap each 'quantity' from all objects
    let sumEachQuantity = eachQuantity.reduce((sum, num) => sum + num);  //reduce returns 'sum' of an array

    let eachBill = basket.map(item => (item.quantity * item.price));     //grap each 'quantity * by its price' from all objects
    let sumEachBill = eachBill.reduce((sum, num) => sum + num);          //reduce returns 'sum' of an array

    const [ clicked, setClicked ] = useState(false);                     //for again render to get updated data
    const screen425 = useMediaQuery('(max-width:425px)');

    const history = useHistory();

    return (
        <div className="basket">
            <Head title="Basket"/>
            <table className="table table-hover table-dark table-sm">
                <thead>
                    <tr className="bg-info">
                        <th scope="col" colSpan={!screen425 ? 2 : 1} id="orders">
                            <h2> <span> Orders </span> <span className="badge badge-light"> {sumEachQuantity} </span> </h2>
                        </th>
                        <th scope="col" colSpan={6} id="bill">
                            <div>
                                <h2> <span> Bill </span> <span className="badge badge-light"> {sumEachBill} </span> </h2>
                                <button
                                    className="btn btn-success shadow-none"
                                    onClick={() => {
                                        setClicked(x => !x);
                                        dispatch(reset());
                                    }}
                                >
                                    <span> Reset </span> <RotateLeftIcon/>
                                </button>
                            </div>
                        </th>
                    </tr>

                    <tr>
                        {!screen425 && <th scope="col" className="first"> # </th>}
                        <th scope="col" className="second"> ITEM </th>
                        {!screen425 && <th scope="col" className="third"> PRICE </th>}
                        <th scope="col" className="third"> QUANTITY </th>
                        <th scope="col" className="fourth"> ADD </th>
                        <th scope="col" className="fourth"> DEL </th>
                        {!screen425 && <th scope="col" className="fourth"> QUIT </th>}
                        <th scope="col" className="fourth"> INFO </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        basket.map((item) => (
                            <tr key={item.id} className="badge-light">
                                {!screen425 && <th className="first"> {item.id}. </th>}
                                <td className="second"> {item.name} </td>
                                {!screen425 && <td className="third"> ${item.price} </td>}
                                <td className="third"> {item.quantity} </td>
                                <td className="fourth">
                                    <button
                                        className="btn btn-primary shadow-none"
                                        onClick={() => {
                                            setClicked(x => !x);
                                            dispatch(added(item.id));
                                        }}
                                    >
                                        <AddIcon/>
                                    </button>
                                </td>
                                <td className="fourth">
                                    <button
                                        className="btn btn-danger shadow-none"
                                        disabled={item.quantity === 0}
                                        onClick={() => {
                                            setClicked(x => !x);
                                            dispatch(removed(item.id));
                                        }}
                                    >
                                        <RemoveIcon/>
                                    </button>
                                </td>
                                {!screen425 && (
                                    <td className="fourth">
                                        <button
                                            className="btn btn-warning shadow-none"
                                            disabled={item.quantity === 0}
                                            onClick={() => {
                                                setClicked(x => !x);
                                                dispatch(quited(item.id));
                                            }}
                                        >
                                            <RemoveShoppingCartIcon style={{ color: "white" }}/>
                                        </button>
                                    </td>
                                )}
                                <td className="fourth">
                                    <button
                                        className="btn btn-success shadow-none"
                                        onClick={() => {
                                            history.push('/details');
                                            dispatch(clickedItemID(item.id));
                                        }}
                                    >
                                        <SendIcon/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Basket;