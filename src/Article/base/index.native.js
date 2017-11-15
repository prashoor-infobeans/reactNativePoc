import React from 'react';
import  {View, Text, TouchableHighlight, Platform} from 'react-native'; 

export default class Base extends React.Component {
    render() {
        return (
            <View style={{width: 280, marginTop: 10, marginBottom: 5}}>
                <View style={{paddingBottom: 8}}>
                    <Text style={{fontWeight: '700', fontSize: 18}}>{this.props.title}</Text>
                </View>
                <Text style={{color: 'darkgray'}}>{this.props.content}</Text>
                <View style={{marginTop: 15}}>
                    <TouchableHighlight onPress={() => {
                        this.props.action();
                    }}>
                        <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#5385c1', width: 180, height: 34, borderRadius: 3}}>
                            <Text style={{color: 'lightgray', fontSize: 16}}>More</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    };
}

Base.defaultProps = {
    title: "",
    content: "",
    action: () => {}    
}