
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MaterielAction from '../action/MaterielActions'
import React from 'react';

class MeteoRenderer extends React.Component {
  componentDidMount(){
  }
  componentWillReceiveNewProps(){
    this.forceUpdate()
  }

  render() {
    // <i>{this.props.data[0].weather[0].description}</i><br/>
    return(

      <div>

      <b>General</b><br/>

      <img src={'http://openweathermap.org/img/w/'+this.props.data[0].weather[0].icon+'.png'} /><br/>
      <i>temperature : </i>{this.props.data[0].main.temp}<br/>
      <i>humidite : </i>{this.props.data[0].main.humidity}<br/>
      <i>pression : </i>{this.props.data[0].main.pressure}<br/><br/>
      <b>Vent</b><br/>
      <i>vitesse  : </i>{this.props.data[0].wind.speed}<br/>
      <i>deg  : </i>{this.props.data[0].wind.deg}<br/>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(MeteoRenderer)
