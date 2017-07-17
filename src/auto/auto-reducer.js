import uuidv1 from 'uuid/v1'
import {getLastKeySection} from './utility'

const deleteReducer = (prev, action, controlPath) => { //todo: posiable code reuse
  const selectedKey = `_selected-${controlPath}`
  const allIdsKey = `${controlPath}_allIds`
  const byIdKey = `${controlPath}_byId`
  const prevAllIds = prev[allIdsKey] || []  
  const selectedEditId = prev[selectedKey]
  const removeIndex = prevAllIds.indexOf(selectedEditId)
  const newAllIds = -1 === removeIndex ? prevAllIds :
    [...prevAllIds.slice(0, removeIndex), ...prevAllIds.slice(removeIndex+1)] //remove index
  return {
    ...clearReducer(prev, action, controlPath),
    [selectedKey]: undefined,
    [allIdsKey]: newAllIds,
    [byIdKey]: {
      ...prev[byIdKey],      
      [selectedEditId]: undefined
    }    
  }
} 

const clearReducer = (prev, action, controlPath) => { //todo: posiable code reuse
  const allKeys = Object.keys(prev)
  const filterKeys = key => key.startsWith(`${controlPath}.`) //consider createing controlPath_addIds
  const formKeys = allKeys.filter(filterKeys)
  const selectedEditId = prev[`_selected-${controlPath}`]
  const byIdKey = selectedEditId || uuidv1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
  const reduceClearObject = (accumulator, key) => ({
    ...accumulator,
    [key]: undefined
  })
  const clearFormObj = formKeys.reduce(reduceClearObject, {
    [`_selected-${controlPath}`]: undefined
  })
  return {
    ...prev,
    ...clearFormObj
  }
}

const submitReducer = (prev, action, controlPath) => {
  const allKeys = Object.keys(prev)
  const filterKeys = key => key.startsWith(`${controlPath}.`) //consider createing controlPath_addIds
  const formKeys = allKeys.filter(filterKeys)
  const selectedEditId = prev[`_selected-${controlPath}`]
  const byIdKey = selectedEditId || uuidv1() // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
  const reduceClearObject = (accumulator, key) => ({
    ...accumulator,
    [key]: undefined
  })
  const clearFormObj = formKeys.reduce(reduceClearObject, {
    [`_selected-${controlPath}`]: undefined
  })
  const reduceFormRecord = (accumulator, key) => ({
    ...accumulator,
    [getLastKeySection(key)]: prev[key]
  })
  const prevAllIds = prev[`${controlPath}_allIds`] || []
  const prevByIds = prev[`${controlPath}_byId`] || {}
  const newByIds = {
    ...prevByIds,
    [byIdKey]: {
      ...formKeys.reduce(reduceFormRecord, {})
    }
  }
  const allIds = selectedEditId
    ? {}
    : {
      [`${controlPath}_allIds`]: [
        ...prevAllIds,
        byIdKey
      ]
    }
  return {
    ...prev,
    ...clearFormObj,
    ...allIds,
    [`${controlPath}_byId`]: newByIds
  }
}

const selectReducer = (prev, action, controlPath) => {
  const listId = action.payload
  const selectedObjected = prev[`${controlPath}_byId`][listId]
  const allKeys = Object.keys(selectedObjected)
  const reduceSelectedList = (accumulator, key) => ({
    ...accumulator,
    [`${controlPath}.${key}`]: selectedObjected[key]
  })
  const defaultObject = {
    [`_selected-${controlPath}`]: listId
  }
  return {
    ...prev,
    ...(allKeys.reduce(reduceSelectedList, defaultObject))
  }
}

export const autoReducer = (prev, action) => {
  const [controlPath = "",
    command = ""] = action
    .type
    .split('__')
  switch (command) {
    case 'CHANGE':
      return {
        ...prev,
        [controlPath]: action.payload
      }
    case 'SUBMIT':
      {
        return submitReducer(prev, action, controlPath)
      }
    case 'SELECT':
      {
        return selectReducer(prev, action, controlPath)
      }
    case 'CLEAR':
      {
        return clearReducer(prev, action, controlPath)
      }
    case 'DELETE':
      {
        return deleteReducer(prev, action, controlPath)
      }

    default:
      return prev
  }
}
