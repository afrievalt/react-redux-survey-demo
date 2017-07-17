import {getLastKeySection} from './utility'
//todo: memoze for better performance

export const autoProps = (state, ownProps) => {
  const {path} = ownProps
  const value = (path && state[path]) || ""
  const textLabel = ownProps.textLabel
  return {
    value,
    textLabel,
    ...ownProps
  }
}

export const inputFilter = (props) => {
  return {value: props.value, placeholder: props.placeholder}
}

export const getAutoActions = (dispatch) => ({
  handleTextChange: (path, value) => 
    dispatch({
      type: path + "__CHANGE",
      payload: value
    }),
    handleSubmit: (path) => 
    dispatch({
      type: path + "__SUBMIT"
    }),
    handleClickRow: (path, key) => 
    dispatch({
      type: path + "__SELECT",
      payload: key
    }),
    handleClearForm: (path) => 
    dispatch({
      type: path + "__CLEAR"
    }),
    handleDeleteSelectedRow: (path) => 
    dispatch({
      type: path + "__DELETE"
    }),
})