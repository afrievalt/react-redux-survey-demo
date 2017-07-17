import database from './database';

const DATA_LOAD_REQUEST = 'earthling/survey/DATA_LOAD_REQUEST';
const handleLoadDataRequest = () => ({
  type: DATA_LOAD_REQUEST
})
const DATA_LOAD_SUCCESS = 'earthling/survey/DATA_LOAD_SUCCESS';
const handleLoadDataSuccess = (payload) => ({
  type: DATA_LOAD_SUCCESS,
  payload
})
const DATA_LOAD_FAIL = 'earthling/survey/DATA_LOAD_FAIL';
const handleLoadDataFail = (payload) => ({
  type: DATA_LOAD_FAIL,
  payload
})

export const handleLoadData = () => {
  return dispatch => {
    dispatch(handleLoadDataRequest());
    return database.ref('/').once('value', snap => {
      const payload = snap.val();
      dispatch(handleLoadDataSuccess(payload))
    })
    .catch((error) => {
      console.log(error);
      dispatch(handleLoadDataFail(error));
    });
  }
}

export const loadDataReducer = (prev, {type, payload}) => {
  switch (type) {
    case DATA_LOAD_SUCCESS: {      
      return {
        ...prev,
        surveyAnswers: payload.surveyAnswers,
        surveyQuestion: payload.surveyQuestion,
        allAnswers: payload.allAnswers || {}
      }
    }
    case DATA_LOAD_FAIL: {
      return {
        error: payload
      }
    }
    default: {
      return prev
    }

  }
}

export const select = {
  questionText: state => state.surveyQuestion.text,
  questionAnswers: state => {
    const {id : questionId = -1} = state.surveyQuestion
    const filterQuestions = answer => answer.questionId === questionId
    const compareOrder = (answer1, answer2) => answer1.order - answer2.order
    const mapAnswer = answer => ({id: answer.id, text: answer.text})
    const {surveyAnswers = []} = state
    return surveyAnswers
      .filter(filterQuestions)
      .sort(compareOrder)
      .map(mapAnswer)
  }
}

export default loadDataReducer