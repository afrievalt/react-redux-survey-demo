export const actionFactory = (...namespace) => {
  const prefix = namespace.join('/') + '/'
  return {
    createChangeTextAction: id => ({
      action: value =>{ 
        return ({
        type: prefix + id,
        payload: value
      })},
      id: prefix + id
    })
  }
}


