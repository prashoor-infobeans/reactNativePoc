import React from 'react';

export default class Form extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return(
            <form name={this.props.name} method={this.props.method} onSubmit={this.onSubmit.bind(this)}>
                {this.props.children}    
                <p className="submit">
                    <input type="submit" name="wp-submit" className="btn btn-primary btn-large-custom margin-zero width-100" id="wp-submit" value={this.props.submitText}/>
                </p>
            </form>
        );
    }
}

Form.defaultProps = {
    name: "",
    method: 'post',
    onSubmit: () => {},
    submitText: "Submit"
}