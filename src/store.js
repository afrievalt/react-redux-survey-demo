import {createStore, applyMiddleware, compose} from 'redux';
import loadDataReducer from './ducks/load-data.duck'
import answerQuestionsReducer from './ducks/answer-question.duck'
import thunk from 'redux-thunk';

export const initialState = {
  surveyQuestion: {},
  questionAnswers: [],
  answer: "",
  allAnswers: {}
}

const reducersToCall = [loadDataReducer, answerQuestionsReducer]
const reducer = (prev = initialState, action) => {
  const reduceReducers = (p, reducerToCall) => reducerToCall(p, action)
  return reducersToCall.reduce(reduceReducers, prev)
}

export default function configureStore(initialState){
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}

export const store = configureStore(initialState)