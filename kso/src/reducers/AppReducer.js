const initialState =  {
  allMainObject : [],
  choosenMainObject : [],
  dependencies:[]
}

export default function appReducer (state = initialState, action) {
 switch (action.type) {
  case 'SIMPLE_ACTION':
   return {
    result: action.payload
   }
  default:
   return state
 }
}
