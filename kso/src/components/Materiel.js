import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MaterielAction from '../action/MaterielActions'


class Materiels extends React.Component {
  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return (
      <div>
        <h1>Materiel</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Materiels)
