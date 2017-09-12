import {FETCH_POSTS, FETCH_POST} from '../actions';
import {fetchPosts} from "../actions/index";
import { combineReducers } from 'redux';

function getPosts(state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload;
        case FETCH_POST:
            return action.payload;
    }
    return state;
}

const grabPosts = combineReducers({
    getPosts
})

export default grabPosts