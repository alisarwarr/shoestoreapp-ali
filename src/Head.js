import React from 'react';
import { Helmet } from 'react-helmet';

function Head({ title }) {
    const AppName = "Shoe Store";

    return (
        <Helmet
            title={`${title} | ${AppName}`}
        />
    )
}

export default Head;