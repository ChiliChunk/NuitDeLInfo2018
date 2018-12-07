import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MaterielAction from '../action/MaterielActions'
import matos from '../MaterielList'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';



class Materiels extends React.Component {
  componentDidMount(){
    this.createMainList()
  }

  createMainList(){
    matos.map((item , index) => {
      this.props.store.allMainObject.push(item)
    })
    this.forceUpdate()
  }

  updateChooseObject(e , index){ //DEGUEULASSE AF MAIS ON A PAS LE TEMPS
    let estPresent = false
    this.props.store.choosenMainObject.map((item) =>{
      if (item.id === this.props.store.allMainObject[index].id){
        estPresent = true
      }
    })
    if(!estPresent){ // ON RAJOUTE
      this.props.store.choosenMainObject.push(this.props.store.allMainObject[index])
    }
    else{ // ON ENLEVE
      let goodindex = -1
      this.props.store.choosenMainObject.map((item,index2) =>{
        if(item.id ===this.props.store.allMainObject[index].id){
          goodindex = index2
        }
      })
      this.props.store.choosenMainObject.splice(goodindex,1)
    }
    this.forceUpdate()
  }


  render(){
    const main = this.props.store.allMainObject.map((item , index) => {
      return(
        <div key={item+index}>
        <FormControlLabel
          control={
            <Checkbox
            onClick={(e) => this.updateChooseObject(e, index)}
            />
          }
          label={item.Main}
        />
        </div>
      )
    })

    const dependencies = this.props.store.choosenMainObject.map((item)=>{
      return(
        <Paper style={{margin : '10px'}} key={item.id}>
          <ul>
        {item.dependencies.map( (content , forKey)=>{
          return(
            <li key={forKey}> {content}</li>
          )
        })}
          </ul>
        </Paper>
      )
    })
    return (
      <div>
        <h1>Gestion de la liste de materiel</h1>
        {main}
        <ul>
        {dependencies}
        </ul>
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
