import React from 'react';
import Article from '../Article';
import Base from './base';

export default class Post extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let dataURL = "http://rohit.corporatesitepoc.com/index.php/wp-json/wp/v2/posts";
        fetch(dataURL)
        .then(res => res.json())
        .then(res => {
            this.setState({
                posts: res
            })
        })
    }

    render() {
        let posts = this.state.posts.map((post, index) => {
            return <Article key={index} post={post}/>
        });
        return (
            <Base>
                {posts}
            </Base>
        )
    }
}