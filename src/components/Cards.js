import React, { useState } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ShoppingBasketIcon from './ShoppingBasketIcon';
import { useHistory } from "react-router-dom";
import Head from '../Head';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { added, removed } from '../redux/basket/actions.js';
import { clickedItemID } from '../redux/itemId/actions.js';

function Cards() {
    const basket = useSelector(state => state.basketReducer);
    const dispatch = useDispatch();

    const [ clicked, setClicked ] = useState(false);       //for again render to get updated data
    const screen770 = useMediaQuery('(max-width:770px)');

    const history = useHistory();

    return (
        <div className="container cards">
            <Head title="Home"/>
            <Grid container spacing={!screen770 ? 2 : 1}>
                {
                    basket.map((item) => (
                        <Grid key={item.id} item xs={12} sm={6} md={4}>
                            <Card className="card">
                                <div className="card_badge">
                                    <h5>
                                        <span className="badge badge-success"> ${item.price} </span>
                                    </h5>
                                    <ShoppingBasketIcon
                                        value={item.quantity}
                                        color="white"
                                    />
                                </div>

                                <CardContent className="card_content">
                                    <img
                                        src={item.pic}
                                        title={item.name}
                                        alt={item.name}
                                    />

                                    <h3 className="card_content_name">
                                        <span className="badge badge-warning"> {item.name} </span>
                                    </h3>

                                    <Typography className="card_content_about">
                                        {item.about}
                                    </Typography>

                                    <div className="card_content_btns">
                                        <button
                                            className="btn shadow-none"
                                            id="detailsbtn"
                                            onClick={() => {
                                                history.push('/details');
                                                dispatch(clickedItemID(item.id));
                                            }}
                                        >
                                            More Details
                                        </button>

                                        <button
                                            className="btn shadow-none"
                                            id="addbtn"
                                            onClick={() => {
                                                setClicked(x => !x);
                                                dispatch(added(item.id));
                                            }}
                                        >
                                            <AddShoppingCartIcon/>
                                        </button>

                                        <button
                                            className="btn shadow-none"
                                            id="removebtn"
                                            disabled={item.quantity === 0}
                                            onClick={() => {
                                                setClicked(x => !x);
                                                dispatch(removed(item.id));
                                            }}
                                        >
                                            <RemoveIcon/>
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                    )
                }
            </Grid>
        </div>
    )
}

export default Cards;