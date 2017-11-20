import React from 'react'
import Basetemplate from '../../../layouts/basicTemplate';

export default class Privacypolicypage extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                page_content: '',
                page_title:''
            };
        }
        
        get def_props() {
            const {id, page_name} = this.props.location.state || {id: 18, page_name:"Privacy policy"}
            return {id, page_name};
        }    
    
        
        componentDidMount() {
            document.body.classList.remove('loginClass');
            document.getElementsByTagName('footer')[0].classList.add("fullPageFooter");
            const {id: pageId, page_name: page_title} = this.def_props;
            this.setState({
                page_title
            });
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
                    <Basetemplate className="bannerContent" id="content-full" >
                        <div className="inner-main-heading">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-left-0 padding-right-0 ">
                                <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-left-0 padding-right-0">
                                    <h1 className="post-title"><span className="heading-line-height">{this.state.page_title}</span></h1>
                                </div>
                            </div>
                            <div className="floating-line"></div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="content_container" dangerouslySetInnerHTML={{__html: this.state.page_content}} >
                        </div>
                    </Basetemplate>
            )
        }
}