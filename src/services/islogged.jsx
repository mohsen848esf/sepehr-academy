import React from 'react';
import { getItem } from './storage/storage'
import { Route } from 'react-router-dom'

const isLogged = (path , cmp) => {
    return getItem("token") && <Route path={path} component={cmp} />;
}
export default isLogged;
