import React from 'react';

import Article from '../Article';
import Base from './base';

export default class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: []
        }
    }

    componentDidMount() {
        let dataURL = "http://rohit.corporatesitepoc.com/index.php/wp-json/wp/v2/pages";
        fetch(dataURL)
        .then(res => res.json())
        .then(res => {
            this.setState({
                pages: res
            })
        })
    }

    render() {
        let pages = this.state.pages.map((page, index) => {
            return <Article key={index} post={page} />
        });
        return (
            <Base>
                {pages}
            </Base>
        )
    }
}