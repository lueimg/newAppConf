import React from 'react';
import {} from 'react-native';
import {Container, Text, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Expo from 'expo';

export default class PostersScreen extends React.Component {
    
     watchDetails = () => {
        //this.props.navigation.navigate('speaker_details')
    }

  render() {
    return (
        <Container>
                <Content>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Acerca de Aspecive</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Sponsors</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Acerca de la  App</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Web Aspecive</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Mapa</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text>Preguntas frecuentes</Text>
                        </Body>
                        
                    </ListItem>
                    <ListItem avatar >
                       
                        <Body>
                            <Text> otros...</Text>
                        </Body>
                        
                    </ListItem>
                </Content>
            </Container>
    );
  }
}
