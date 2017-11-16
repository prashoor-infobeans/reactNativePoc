import LoginModule from './index.native';

export default function() {
    return LoginModule.call(this, this.props, this.state);
}