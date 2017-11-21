import React from 'react';
import Form from '../../Components/form';
import FormContainer from '../../Components/FormContainer';
import LoginFormEntry from './LoginFormEntry';

export default class LoginView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user_login: "", user_pass: ""
        };
    }

    update(key, text) {
        this.setState({[key]: text})
    }

    render() {
        return (
            <FormContainer title={'Sign In'}>
                <Form name="loginform" method="post" onSubmit={this.props.handleSubmit} submitText={'Login'}>
                    <LoginFormEntry value={this.state} onChangeText={this.update.bind(this)}/>
                </Form>
            </FormContainer>
        )
    }
    
    loginCall(success, failure = null) {
        fetch(
            'http://rohit.corporatesitepoc.com/index.php/wp-json/dummyForm/update',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_login: this.state.user_login,
                    user_pass: this.state.user_pass
                })
            }
        ).then(resp => {
            let copyRes = resp.clone();
    
            resp.json().then(rp => {
                let response = JSON.parse(rp);
                if (response.permission) {
                    if (typeof success == "function") {
                        success(response);
                    }
                }
            }).catch(err => {
                copyRes.text().then(rp => {
                    console.log(rp);
                });
            });
        }).catch(err => {
            console.log(err);
            if (typeof failure == "function") {
                failure(err);
            }
        });
    }
}
