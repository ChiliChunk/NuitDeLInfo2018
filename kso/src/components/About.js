import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MaterielAction from '../action/MaterielActions'




class About extends React.Component {
  render(){
    return(
      <p>Application créée pendant la nuit de l'info 2018</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About)
