import React, {Component} from "react";
import {View, Text, ScrollView, Image, TouchableOpacity, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style'

export default class Home extends Component{
    state = {
        data: [], 
        valor: ''
      }

      async componentDidMount() {
          this.handlePr();
      }

      handlePr = () => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=6db402f2f23b80d07ac905f8a5d7d1ee&query=a')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.setState({
            data: data.results,
          })
        })
      }

      static navigationOptions = {
        title: 'Filmes',
        headerTintColor: 'red',
          headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
            alignSelf:'center',
        },
        headerStyle: {
          backgroundColor: 'black',
        },
      }

      handleInput = e => {
        let pesquisa = this.state.valor;
    
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6db402f2f23b80d07ac905f8a5d7d1ee&query=${pesquisa}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.setState({
            data: data.results
          })
        })
      };
     
    render() {
        return(
        <ScrollView>
          <View style={{ float: 'left', backgroundColor: 'rgb(23,23,23)'}}>
            <Image style={{width:430, height:200}} source={require('./capa.jpg')} />
            <View style={{height:25}}><Text style={{color: 'white', marginLeft:120, fontSize:18}}>Filme em Destaque</Text></View>
          </View>
          <View style={{ backgroundColor: 'rgb(41,41,41)', height:'100%'}}>
          <View style={{display:'flex',flex:1, flexDirection:'row', flexWrap: 'wrap'}} >
          <TouchableOpacity 
            onPressIn={this.handlePr} >
               <Text style={{color: 'white', fontSize:27, marginTop: 10, marginLeft: 40, marginBottom: 10}}>Filmes</Text>
               </TouchableOpacity>
            <TextInput onChangeText={(valor) => this.setState({valor: valor})} placeholder="Pesquisa" placeholderTextColor='black' style={{ height: 35,  width: 120, marginTop: 10, backgroundColor: 'white', borderRadius: 90, color: 'black', marginLeft: 80, marginRight:5}}></TextInput>
              <TouchableOpacity 
            onPressIn={this.handleInput} style={{marginTop:10}}>
           <Icon name="search" size={30} color="red" />
               </TouchableOpacity>
            </View>
            <View style={{display:'flex',flex:1, flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: -110}}>
            {
            this.state.data.map(data => (
            <View  style={{width: 150, borderRadius: 5, marginBottom:20, borderColor: 'rgb(23,23,23)', alignItems: 'center'}}>
            <Image  style={{width:150, height:200}} source={{uri: `https://image.tmdb.org/t/p/w185${data.poster_path}`}} />
            <Text style={{color: 'white', fontSize:20}}>{data.title}</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pesquisa', {Ima: data.poster_path, Fav: data.vote_average, Dat: data.release_date, Decr: data.overview})}>
              <Icon name="play" size={20} color="white" />
            </TouchableOpacity>
            </View>
           
            ))
            }
            </View>
            </View>
            
        </ScrollView>
            
        );
    }
}