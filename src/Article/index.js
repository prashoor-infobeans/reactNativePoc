import React from 'react';
import Base from './base';

export default class Article extends React.Component {

    render () {
        const {title, content} = this.props.post || {title: {rendered: ""}, content: {rendered: ""}};        
        return (
            <Base title={title.rendered} content={content.rendered}/>
        );
    }
} 