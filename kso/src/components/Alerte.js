import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MaterielAction from '../action/MaterielActions'
import matos from '../MaterielList'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class Alerte extends React.Component {
  render(){
    return(
      <div>
        <p>Message associé a vos coordonnées GPS<br/> Latitude :{this.props.store.coords[0].lat} Longitude : {this.props.store.coords[0].lon}</p>
        <TextField
          id="outlined-multiline-static"
          label="Signaler Quelquechose"
          multiline
          rows="10"
          margin="normal"
          variant="outlined"
        />
        <br/>
        <Button variant="contained" >
          Envoyer
        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Alerte)
