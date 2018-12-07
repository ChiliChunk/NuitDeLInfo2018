
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MaterielAction from '../action/MaterielActions'
import React from 'react';
import axios from 'axios';
import MeteoRenderer from './MeteoRenderer'


class Meteo extends React.Component {

  componentDidMount(){
    console.log(this.props)
    this.setState({
      isLoaded : false
    })
    this.getMeteo()
  }

  getMeteo() {
      let localLat = Math.round(this.props.store.coords[0].lat)
      let localLon = Math.round(this.props.store.coords[0].latlon)
      let url = "https://openweathermap.org/data/2.5/weather?lat=" + localLat+"&lon="+localLon+"&appid=b6907d289e10d714a6e88b30761fae22"
      axios.get(url)
      .then(response =>{
        this.props.store.meteoNow.push(response.data)
        this.setState({isLoaded : true})
      })

      let url2 = "https://samples.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22"
      axios.get(url2)
      .then(response2 =>{
        this.props.store.meteoLater.push(response2.data)
      })
      console.log(this.props.store.meteoLater)
    }

  render() {
    if((this.state && this.state.isLoaded)===true) {
      return(
        <div>
          <h1>Maintenant</h1>
          <MeteoRenderer data={this.props.store.meteoNow}/>
          <h1>Dans 5 jours</h1>
          not implement yet
        </div>
      );
    } else {
      return(
        <p>On load</p>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    store : state.appReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    MaterielAction: bindActionCreators(MaterielAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meteo)
