import uuidv1 from 'uuid/v1'
import database from './database';

const ANSWER_CHANGE = 'earthling/survey/ANSWER_CHANGE';
export const handleChangeAnswer = (payload) => ({
  type: ANSWER_CHANGE,
  payload
})

const ERROR_CHANGE = 'earthling/survey/ERROR_CHANGE';
export const handleChangeError = (payload) => ({
  type: ERROR_CHANGE,
  payload
})

const ANSWER_SUBMIT_REQUEST = 'earthling/survey/ANSWER_SUBMIT_REQUEST';
const handleSubmitAnswerRequest = (userId, answer) => ({
  type: ANSWER_SUBMIT_REQUEST,
  payload: {userId, answer}
})
const ANSWER_SUBMIT_SUCCESS = 'earthling/survey/ANSWER_SUBMIT_SUCCESS';
const handleSubmitAnswerSuccess = (payload) => ({
  type: ANSWER_SUBMIT_SUCCESS,
  payload
})
const ANSWER_SUBMIT_FAIL = 'earthling/survey/ANSWER_SUBMIT_FAIL';
const handleSubmitAnswerFail = (payload) => ({
  type: ANSWER_SUBMIT_FAIL,
  payload
})

export const handleSubmitAnswer = () => {      
  return (dispatch, getState) => {
    const {
      userId = uuidv1(),
      answer
    } = getState()   
    
    dispatch(handleSubmitAnswerRequest(userId, answer));
    const allAnswers = database.ref().child("/allAnswers")
    allAnswers.update({[userId]: answer})
        .then(() => dispatch(handleSubmitAnswerSuccess()))
        .catch(payload => dispatch(handleSubmitAnswerFail(payload)))    
  }
}

export const answerQuestionReducer = (prev, {type, payload}) => {
  switch (type) {
    case ANSWER_CHANGE: {      
      return {
        ...prev,
        error: "",
        answer: payload,
      }
    }
    case ERROR_CHANGE: {
      return {
        ...prev,
        error: payload
      }
   }
   case ANSWER_SUBMIT_REQUEST: {      
      const {userId, answer} = payload
      return {
        ...prev,
        userId, 
        allAnswers: {          
          ...prev.allAnswers,
          [userId]: answer
        },
        error: ""        
      }
    }
    default: {
      return prev
    }

  }
}

export default answerQuestionReducer

const getPercentage = (count, total) => {
  if(count) {
    const result = (count / total) * 100
    return Math.round(result)
  }
  return 0 
}
 
export  const select = {  
  getResults: (state) => {
    const allAnswersKeys = Object.keys(state.allAnswers)
    const reduceCounts = (prev, currentKey) => {
      const curResultKey = state.allAnswers[currentKey]
      const oldResult = prev[curResultKey] || 0       
      return {
        ...prev,
        [curResultKey]:  oldResult + 1
      }
    }
    const countResults = allAnswersKeys.reduce(reduceCounts, {})
    const mapAnswers = ({id, text}) => ({
      id,
      text,
      count: countResults[id] || 0,
      percentage: getPercentage (countResults[id], allAnswersKeys.length)
    })
    const {surveyAnswers = []} = state
    return surveyAnswers.map(mapAnswers)
  }
}
