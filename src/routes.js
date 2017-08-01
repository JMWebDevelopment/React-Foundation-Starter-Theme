import React from 'react';
import {Route, IndexRoute} from 'react-router';

//import Home from './components/home';
//import Blog from './components/blog';
//import Search from './components/search';
//import Category from './components/category';
//import Tag from './components/tag';
//import Single from './components/single';

export default (
    <Route path="/">
        <IndexRoute component={Home}/>
        /*<Route path="page/:pageNum" component={Blog} addHandlerKey={true}/>
        <Route path="search/:term" component={Search}/>
        <Route path="category/:slug/" component={Category}/>
        <Route path="category/:parent/:slug/" component={Category}/>
        <Route path="category/:slug/:pageNum(\\d+)" component={Category}/>
        <Route path="category/:parent/:slug/:pageNum(\\d+)" component={Category}/>
        <Route path="tag/:slug" component={Tag}/>
        <Route path="tag/:slug/:pageNum(\\d+)" component={Tag}/>
        <Route path="*" component={Single}/>*/
    </Route>
);