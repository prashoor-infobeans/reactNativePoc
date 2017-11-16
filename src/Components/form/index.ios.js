import Form from './index.native';

export default function() {
    return Form.call(this, this.props, this.state);
}