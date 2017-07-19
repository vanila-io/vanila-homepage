'use strict';

import React from 'react';
import Meta from '../meta';
import { Helmet } from 'react-helmet';
import _ from 'lodash';


const SEO = (props) => {

    let content = _.find( Meta, { url: props.url } );
    if ( ! content ) {
        content = _.find( Meta, { url: 'default' } );
    }

    return (
        <Helmet>
          <title>Florida Web Design, Web & Mobile App Development - Vanila.io</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Florida Web & mobile development and design agency for IOS, Android using latest technology . Our company is providing with SEO and Social "/>
          <meta name="author" content="Vanila"/>
          <meta http-equiv="Cache-control" content="public"/>

            <meta property="og:image" content="https://vanila.io/img/vanila-og.png" />
            <meta property="og:title" content="Vanila - Mobile & Web development, Design, SEO" />
            <meta property="og:url" content="https://vanila.io" />
            <meta property="og:site_name" content="Vanila Team" />
            <meta property="og:description" content="Vanila is team who is specialized in front and backend development, seo and marketing." />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://vanila.io" />
            <meta name="twitter:title" content="Vanila - Mobile & Web development, Design, SEO" />
            <meta name="twitter:description" content="Vanila is team who is specialized in front and backend development, seo and marketing." />
            <meta name="twitter:image" content="https://vanila.io/img/vanila-og.png" />
        </Helmet>
    );

}


export default SEO;
