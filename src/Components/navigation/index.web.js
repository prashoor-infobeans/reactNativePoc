import React from 'react';

export default class Navigation extends React.Component {
    
    componentWillMount() {
        console.log(this.props);
    }

    render() {
        const {title, click, style} = this.props.footerConfig || {style: "", title: "Footer", click: () => {}}
        return(
            <nav className="main-menu">
                {this.renderMenu()}
                <ul className={{style}}>
                    <li>
                        <a href="#" onClick={click}>
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">
                                {title}
                            </span>
                        </a>
                    </li>  
                </ul>
            </nav>
        );
    }

    renderMenu() {
        var list = [];
        for (let it of this.props.menu) {
            let classes = `fa ${it.icon} fa-2x`;
            list.push(
                <ul key={this.props.menu.indexOf(it)}>
                    <li>
                        <a href={it.link}><i className={classes}></i>
                            <span className="nav-text">{it.title}</span>
                        </a>  
                    </li> 
                </ul>
            )
        }
        return list;
    }
}