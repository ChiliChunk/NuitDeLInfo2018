import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MaterielAction from '../action/MaterielActions'
import matos from '../MaterielList'
import Checkbox from '@material-ui/core/Checkbox';


class Materiels extends React.Component {
  componentDidMount(){
    console.log(this.props)
    console.log(matos)
  }

  createMainList(){
    matos.map((item , index) => {
      
    })
  }

  render(){
    return (
      <div>
        <h1>Gestion de la liste de materiel</h1>

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
