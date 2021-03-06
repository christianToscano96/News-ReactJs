import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = { 
    noticias : []
   }

  //lamado a una api
  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => { //utiliza esa categoria como inicial
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=02d3cc1b32af4340b40d7c534df7e856`
    
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })
  }
  
  render() { 
    return (
      <Fragment>
          <Header 
            titulo='Noticias React API'
          />

          

          <div className="container white contenedor-noticias">
            <Formulario
              consultarNoticias={this.consultarNoticias}
            />

            <ListaNoticias
              noticias={this.state.noticias}
            />
          </div>
      </Fragment>
     );
  }
}
 
export default App;


