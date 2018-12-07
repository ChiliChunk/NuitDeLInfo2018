

import React from 'react';
// import Wind from './wind';

class Meteo extends React.Component {

  constructor(){
    this.getMeteo().bind(this)
  }

  componentDidMount(){
    console.log(this)
    this.setState({
      isLoaded : false
    })
    this.getMeteo()
  }

    async getMeteo() {
     await fetch("api.openweathermap.org/data/2.5/weather?lat=" + meteo.coord.lat + "&lon=" + meteo.coord.lat + "&appid=b6907d289e10d714a6e88b30761fae22")
      // .then(res => res.json())
      // .then((response) => {
      //   let tab = [];
      //   tab.push({ temp: response.main.temp });
      //
      //   this.setState({
      //     isLoaded: true,
      //     items: tab
      //   });
      // })

  }

  render() {
    if(this.state.isLoaded===true) {
      return(
        <Wind speed={}/>
      );
    } else {
      // return(
      //   "On load...")
    }
  }
}

export default Meteo;
