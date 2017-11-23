import React from 'react';
import Basetemplate from '../../layouts/basicTemplate';
import { Link, Redirect } from 'react-router-dom';
import Constant from '../../Constant';

export default class Postsmodule extends React.Component {
    componentDidMount() {
        document.body.classList.remove('loginClass');
    }
    render() {
        return (
                <Basetemplate >
                    {(this.props.type === "list")?<Postlist />:<Post post_name={this.props.match.params.name}/>}
                </Basetemplate>
        );
    }
}

class Post extends React.Component{
        constructor() {
            super();
            this.state = {
                post_title:'',
                post_data: ''
            }
        }

        componentDidMount() {
            document.body.classList.remove('loginClass');
            let dataURL = Constant.url.siteurl+"wp-json/wp/v2/posts?slug="+ this.props.post_name;
            fetch(dataURL)
                    .then(res => res.json())
                    .then(res => {
                        this.setState({
                            post_title: res["0"].title.rendered,
                            post_data: res["0"].content.rendered
                        })
                    })
        }
        render(){
            return(
                    <div dangerouslySetInnerHTML={{__html: this.state.post_data}} >
                    </div>);
        }
}

class Postlist extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        document.body.classList.remove('loginClass');
        let dataURL = Constant.url.siteurl+"wp-json/lists/posts";
        fetch(dataURL)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        data: res
                    })
                })
    }

    render() {
        var DataTable = require('react-data-components').DataTable;
        var data = this.state.data;
        const postUrl = (data, row) =>
            <Link to={`${row['action']}`}>
                View Post
            </Link>;

        var columns = [
            {title: 'Post name', prop: 'name'},
            {title: 'Action', render: postUrl, className: 'text-center'}
        ];


        return (
                    <DataTable
                        keys="name"
                        columns={columns}
                        initialData={data}
                        initialPageLength={5}
                        initialSortBy={
                                {prop: 'name',
                                order: 'descending' }}
                        />
        );
    }

}