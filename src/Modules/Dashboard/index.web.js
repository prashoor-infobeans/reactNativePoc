import React from 'react';
import { Redirect } from 'react-router-dom';
import DeviceStorage from 'react-device-storage';

import Basetemplate from '../../layouts/basicTemplate';

export default class Dashboardmodule extends React.Component{
        constructor() {
            super();
            this.state = {
                page_content: '',
                page_title:''
            };
        }
        componentDidMount() {
            document.body.classList.remove('loginClass');
            //document.getElementsByTagName('footer')[0].classList.add("fullPageFooter");
//            var pageId = (this.props.location.state != undefined)? this.props.location.state.id:18;
//            this.setState({
//                page_title: (this.props.location.state != undefined)? this.props.location.state.page_name:'Privacy policy'
//            });
//            let dataURL = "http://rohit.corporatesitepoc.com/index.php/wp-json/wp/v2/pages/"+pageId;
//            fetch(dataURL)
//                .then(res => res.json())
//                .then(res => {
//                    this.setState({
//                      page_content: res.content.rendered
//                    })
//            })
        }
        render(){
            return (
                    <Basetemplate />
            );
        }
}