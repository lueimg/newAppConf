import React from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Expo from 'expo';
import { Header } from '../../Components/custom-components';
import { gold, blue, skyblue, gray, white } from '../../colors.js';
import styled from 'styled-components/native';
const { width, height } = Dimensions.get('window');
const data = [
    {
        text: 'Junta Directiva',
        route: 'Junta'
    },
    {
        text: 'Hotel Country Club',
        route: 'Hotel'
    },
    {
        text: 'Lima',
        route: 'Ciudad'
    },
    {
        text: 'Acerca de Aspecive',
        route: 'Acerca'
    },
    // {
    //     text: 'Acerca de esta App'
    // }

];

const RowContainer = styled(View) `
   
    padding: 30px;
    alignItems: center;
    borderBottomColor: #CCC;
    borderBottomWidth: 1px;
    
`;

const RowText = styled(Text) `
    font-size: 20px;
`;


const Row = ({ text, route, goTo }) => {
    return (
        <TouchableWithoutFeedback onPress={() => goTo(route)}>
            <RowContainer >
                <RowText >{text}</RowText>
            </RowContainer>
        </TouchableWithoutFeedback>

    )
}

export default class MasScreen extends React.PureComponent {

    goTo = (route) => {
        this.props.navigation.navigate(route)
    }

    render() {
        return (
            <Container>
                <Header title="Más" />
                <Content>
                    {data.map((item, index) => <Row key={index} {...item} goTo={this.goTo} />)}
                </Content>
            </Container>
        );
    }
}
