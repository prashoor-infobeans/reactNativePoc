import React from 'react'
import Basetemplate from '../../../layouts/basicTemplate';

export default class Privacypolicypage extends React.Component{
        constructor() {
            super();
            this.state = {
                page_content: ''
            };
        }
        componentDidMount() {
            document.body.classList.remove('loginClass');
            document.getElementsByTagName('footer')[0].classList.add("fullPageFooter");
            var pageId = this.props.location.state.id;
            let dataURL = "http://rohit.corporatesitepoc.com/index.php/wp-json/wp/v2/pages/"+pageId;
            fetch(dataURL)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                      page_content: res.content.rendered
                    })
            })
        }
        render(){
            return (
                    <Basetemplate className="bannerContent" id="content-full"dangerouslySetInnerHTML={{__html: this.state.page_content}}></Basetemplate>
            )
        }
}