import Immutable from 'immutable'

export default (state = Immutable.List(['Code More!']), action) => {
  switch(action.type) {
    case 'addTodo':
      console.log(action.newRecord)
      return state.push(action.newRecord)
    default:
      return state
  }
}