import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const ROUTER = 'ROUTER';

const WP_API_ENDPOINT = reactfoundationstarter.root;

export function fetchPosts(pageNum = 1, post_type = 'posts') {
    return function (dispatch) {
        axios.get(`${WP_API_ENDPOINT}/wp/v2/posts?page=${pageNum}`)
            .then(response => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: response.data
                });
            });
    }
}

export function fetchPost(slug) {
    return function (dispatch) {
        axios.get(`WP_API_ENDPOINT}/wp/v2/posts?slug=${slug}`)
            .then(response => {
                dispatch({
                    type: FETCH_POST,
                    payload: [response.data]
                });
            });
    }
}