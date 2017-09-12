'use strict';

import React, {Component} from 'react';
import superagent from 'superagent';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

var ArchivePost = React.createClass({

    render: function () {
        return (
            <article classID="post-{this.props.post.ID}" className="post">
                <h4>{this.props.post.title.rendered}</h4>
                <div className="entry-summary" dangerouslySetInnerHTML={{__html: this.props.post.excerpt.rendered}}></div>
            </article>
        );
    }
});

module.exports = ArchivePost;