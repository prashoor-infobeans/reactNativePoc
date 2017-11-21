import React from 'react';
import Basetemplate from '../layouts/basicTemplate';

export default class Postsmodule extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        document.body.classList.remove('loginClass');
        let dataURL = "http://rohit.corporatesitepoc.com/index.php/wp-json/lists/posts";
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
 
        var columns = [
          { title: 'Post name', prop: 'name'  },
          { title: 'Action', prop: 'action' }
        ];

        var data = this.state.data;
        return (
                <Basetemplate >
                    <DataTable
                        keys="name"
                        columns={columns}
                        initialData={data}
                        initialPageLength={5}
                        initialSortBy={{ prop: 'name', order: 'descending' }}
                    />
                </Basetemplate>
        );
    }
}