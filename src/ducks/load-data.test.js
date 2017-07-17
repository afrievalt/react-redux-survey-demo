import { select } from './load-data.duck'

it('questionAnswers - when empty - should return empty array', () => {
  // Arrange
  const state = {surveyQuestion: {}}
  const expectedResult = []
  // Act
  const result = select.questionAnswers(state)  
  // Assert
  expect(result).toEqual(expectedResult)
});


it('questionAnswers', () => {
  // Arrange
  const state = {surveyAnswers:[{id:41234,order:0,questionId:675123,text:'1'},{id:41235,order:1,questionId:675123,text:'2'},{id:41236,order:2,questionId:675123,text:'3'},{id:41237,order:3,questionId:675123,text:'4'},{id:41238,order:4,questionId:675123,text:'More than 4'}],
    surveyQuestion:{id:675123,   text:'How many people live in your household'}}
  const expectedResult = [{id:41234, text:'1'},{id:41235, text:'2'},{id:41236, text:'3'},{id:41237, text:'4'},{id:41238, text:'More than 4'}]
  // Act
  const result = select.questionAnswers(state)  
  // Assert
  expect(result).toEqual(expectedResult)
});

it('questionAnswers - should filter', () => {
  // Arrange
  const state = {surveyAnswers:[{id:41234,order:0,questionId:6,text:'1'},{id:41235,order:1,questionId:675123,text:'2'},{id:41236,order:2,questionId:675123,text:'3'},{id:41237,order:3,questionId:675123,text:'4'},{id:41238,order:4,questionId:675123,text:'More than 4'}],
    surveyQuestion:{id:675123,   text:'How many people live in your household'}}
  const expectedResult = [{id:41235, text:'2'},{id:41236, text:'3'},{id:41237, text:'4'},{id:41238, text:'More than 4'}]
  // Act
  const result = select.questionAnswers(state)  
  // Assert
  expect(result).toEqual(expectedResult)
});

it('questionAnswers - should sort', () => {
  // Arrange
  const state = {surveyAnswers:[{id:41234,order:1,questionId:675123,text:'1'},{id:41235,order:0,questionId:675123,text:'2'},{id:41236,order:2,questionId:675123,text:'3'},{id:41237,order:3,questionId:675123,text:'4'},{id:41238,order:4,questionId:675123,text:'More than 4'}],
    surveyQuestion:{id:675123,   text:'How many people live in your household'}}
  const expectedResult = [{id:41235, text:'2'},{id:41234, text:'1'}, {id:41236, text:'3'},{id:41237, text:'4'},{id:41238, text:'More than 4'}]
  // Act
  const result = select.questionAnswers(state)  
  // Assert
  expect(result).toEqual(expectedResult)
});
