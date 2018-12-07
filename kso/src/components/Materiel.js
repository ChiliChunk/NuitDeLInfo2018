import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MaterielAction from '../action/MaterielActions'
import matos from '../MaterielList'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



class Materiels extends React.Component {
  componentDidMount(){
    console.log(this.props)
    console.log(matos)
    this.createMainList()
  }

  createMainList(){
    matos.map((item , index) => {
      this.props.store.allMainObject.push(item)
    })
    this.forceUpdate()
  }

  updateChooseObject(e , index){
    let estPresent = false
    this.props.store.choosenMainObject.map((item) =>{
      console.log(item)
      if (item.id === this.props.store.allMainObject[index].id){
        estPresent = true
      }
    })
    if(!estPresent){
      console.log('c est pas present')
      this.props.store.choosenMainObject.push(this.props.store.allMainObject[index])
    }
    else{
      let goodindex = -1
      this.props.store.choosenMainObject.map((item,index2) =>{
        if(item.id ===this.props.store.allMainObject[index].id){
          goodindex = index2
        }
      })
      console.log(goodindex)
      this.props.store.choosenMainObject.splice(goodindex,1)
    }
    console.log(this.props.store.choosenMainObject)
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
    return (
      <div>
        <h1>Gestion de la liste de materiel</h1>
        {main}
        <ul>

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
