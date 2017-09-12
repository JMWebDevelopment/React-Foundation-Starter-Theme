import React, {Component} from 'react';

import superagent from 'superagent';

import ArchivePost from './archivePost';

var Home = React.createClass({

    getInitialState() {
        // Check if post data has been sent through with the component, use that

        // Nothing there either, return empty strings for now
        return {
            posts: {}
        }
    },

    setLocalState(data) {
        // Store in LocalStorage
        //window.localStorage.setItem(this.constructor.displayName + extension, JSON.stringify(data));

        // Store in Component State
        this.setState(data);
        console.log(this.state.posts);
    },

    componentWillMount() {

        superagent
            .get(`${reactfoundationstarter.root}wp/v2/posts`)
            .end(function(err, res) {
                this.setLocalState({
                    posts: res.body
                });
            }.bind(this));

        console.log(this.state.posts);
    },


    render() {
        var posts = [];
        for(var i = 0; i < this.state.posts.length; i++) {
            posts.push(<ArchivePost post={this.state.posts[i]} key={i}>{this.state.posts[i].title.rendered}</ArchivePost>);
        }

        return (
            <div className="row">
                <div className="columns large-12">
                {posts}
                </div>
            </div>
        );
    }
});

module.exports = Home;