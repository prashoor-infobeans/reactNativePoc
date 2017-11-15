import React, { Component } from 'react';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      menu: []
    }
  }
componentDidMount() {
    let dataURL = "http://rohit.corporatesitepoc.com/index.php/wp-json/myroutes/menu";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          menu: res
        })
      })
  }
render() {
    let menu = this.state.menu.map((menu_item, index) => {
      return <a key={index} href={menu_item.url}>{menu_item.title}</a>
    });
return (
        <div className="inner">
            <a href="index.html" className="logo">Theory</a>
            <nav id="nav">
                    {menu}
            </nav>
        </div>
    )
  }
}
export default Header;