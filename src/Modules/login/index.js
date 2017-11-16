import React from 'react';
import Basetemplate from '../../layouts/basicTemplate';
import DeviceStorage from 'react-device-storage';
import Form from '../../Components/form';
import FormContainer from '../../Components/FormContainer';
import LoginFormEntry from './LoginFormEntry';

class Loginmodule extends React.Component {
    constructor() {
        super();
        this.storage = new DeviceStorage({
            cookieFallback: true,
            cookie: {
                secure: true
            }
        }).localStorage();

        this.state = {
            user_login: "", user_pass: "",
            isLoggedIn: this.storage.read('isLoggedIn')
        };
    }
    
    update(key, text) {
        this.setState({[key]: text})
    }

    handleSubmit() {
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
            }).then(resp => {
            let copyRes = resp.clone();

            resp.json().then(rp => {
                let response = JSON.parse(rp);
                if (response.permission) {
                    this.setName(response.permission);
                    window.location.reload();
                }
            }).catch(err => {

                copyRes.text().then(rp => {
                    console.log(rp);
                });

            });
        }).catch(err => {
            console.log(err);
        });
    }

    setName(premission) {
        this.storage.save('isLoggedIn', premission);
        this.setState({
          premission
        });
    }

    render() {
        return (
            <FormContainer title={'Sign In'}>
                <Form name="loginform" method="post" onSubmit={this.handleSubmit.bind(this)} submitText={'Login'}>
                    <LoginFormEntry value={this.state} onChangeText={this.update.bind(this)}/>
                </Form>
            </FormContainer>
        )
    }
}
export default Loginmodule;


