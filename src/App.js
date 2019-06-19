import React, { Component } from 'react';

class App extends Component {
  state = { 
    noticias : []
   }

  //lamado a una api
  componentDidMount() {
    this.consultatNoticias();
  }

  consultatNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=02d3cc1b32af4340b40d7c534df7e856`
    
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })
  }
  
  render() { 
    return ( <h1>hola</h1> );
  }
}
 
export default App;


