import React, {Component} from "react";
import {View, Text, ScrollView, Image, TouchableOpacity, ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Pesquisa extends Component{
    state = {
        data: []
      }
      async componentDidMount() {
        await fetch('https://api.themoviedb.org/3/search/movie?api_key=6db402f2f23b80d07ac905f8a5d7d1ee&query=ant')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.setState({
            data: data.results
          })
        })
      }
     
      static navigationOptions = {
        title: 'Filmes',
        
        headerTitleStyle: { 
          textAlign:"center", 
          flex:1,
        },
        headerTintColor: 'red',
        headerStyle: {
          backgroundColor: 'black',
          
        },
      }
    render() {
      const { navigation } = this.props;
      const Ima = navigation.getParam('Ima');
      const Fav = navigation.getParam('Fav');
      const Dat = navigation.getParam('Dat');
      const Decr = navigation.getParam('Decr');
        return(
        <ScrollView>
          <View >
             <ImageBackground source={require('./fundo.jpg')} style={{width: '100%', height: 200}}>
             <Image  style={{width:150, height:200, marginLeft: 130}} source={{uri: `https://image.tmdb.org/t/p/w185${this.props.navigation.state.params.Ima}`}} />
             </ImageBackground>
             <View>
               <View style={{backgroundColor: 'red', height: 40, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="star" size={20} color="white" />
               </View>
             </View>
             <View style={{backgroundColor: 'rgb(23,23,23)', height: 500}}>
               <View style={{marginTop: 5, marginLeft:20, marginRight: 20, display:'flex',flex:1, flexDirection:'row', flexWrap: 'wrap'}} >
               <Text style={{color: 'green', textAlign:'center', fontSize:15, marginRight: 100, marginLeft: 100}}>{JSON.stringify(Fav)}</Text>
             <Text style={{color:'white',textAlign:'justify', fontSize: 15, textAlign:'center'}}>{JSON.stringify(Dat)}</Text>
               </View>
               <Text style={{color:'white',marginTop:-50, fontSize: 18}}>{JSON.stringify(Decr)}</Text>
               <View style={{marginTop: 50, marginLeft:20, marginRight: 20, display:'flex',flex:3, flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <View> 
                <Icon name="check" size={50} color="green" />
                <Text style={{color: 'white', fontSize:18}}>My List</Text>
                </View>
                <View> 
                <Icon name="heart" size={50} color="red" />
                <Text style={{color: 'white', fontSize: 18}}>Like</Text>
                </View>
                <View> 
                <Icon name="upload" size={50} color="white" />
                <Text style={{color: 'white', fontSize: 18}}>Upload</Text>
                </View>
                </View>
               </View>
             </View>
        </ScrollView>
        );
    }
}