import React from 'react';
import { Redirect } from 'react-router-dom';
import DeviceStorage from 'react-device-storage';

import Basetemplate from '../../layouts/basicTemplate';

export default class Dashboardmodule extends React.Component{
        constructor() {
            super();
            this.state = {
                data:''
            };
        }
        componentDidMount() {
            document.body.classList.remove('loginClass');
            //document.getElementsByTagName('footer')[0].classList.add("fullPageFooter");
            let dataURL = "http://rohit.corporatesitepoc.com/index.php/wp-json/lists/posts";
            fetch(dataURL)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                      data: res
                    })
            })
        }
        render(){
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