export function addNewRecord(newRecord){
  return {
    type: 'addRecord',
    newRecord
  }
}

export function deleteRecord(index){
  return {
    type: 'deleteRecord',
    index
  }
}