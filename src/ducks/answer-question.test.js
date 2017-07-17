import { select } from './answer-question.duck'

it('getResults - when one answer - answer has 100%', () => {
  // Arrange  
  const state = {
    allAnswers: {a: 41234}, 
    surveyAnswers: [{id:41234, text:'1'},{id:41235, text:'2'},{id:41236, text:'3'},{id:41237, text:'4'},{id:41238, text:'More than 4'}]}
  const expectedResult = [
    {id:41234, text:'1', count: 1, percentage: 100},
    {id:41235, text:'2', count: 0, percentage: 0},
    {id:41236, text:'3', count: 0, percentage: 0},
    {id:41237, text:'4', count: 0, percentage: 0},
    {id:41238, text:'More than 4', count: 0, percentage: 0}]
  // Act
  const result = select.getResults(state)  
  // Assert
  expect(result).toEqual(expectedResult)
});

it('getResults - when two answers the same - answer has 100%', () => {
  // Arrange  
  const state = {
    allAnswers: {a: 41234, b: 41234}, 
    surveyAnswers: [{id:41234, text:'1'},{id:41235, text:'2'},{id:41236, text:'3'},{id:41237, text:'4'},{id:41238, text:'More than 4'}]}
  const expectedResult = [
    {id:41234, text:'1', count: 2, percentage: 100},
    {id:41235, text:'2', count: 0, percentage: 0},
    {id:41236, text:'3', count: 0, percentage: 0},
    {id:41237, text:'4', count: 0, percentage: 0},
    {id:41238, text:'More than 4', count: 0, percentage: 0}]
  // Act
  const result = select.getResults(state)  
  // Assert
  expect(result).toEqual(expectedResult)
});

it('getResults - when two different answers - answers have 50%', () => {
  // Arrange  
  const state = {
    allAnswers: {a: 41234, b: 41237}, 
    surveyAnswers: [{id:41234, text:'1'},{id:41235, text:'2'},{id:41236, text:'3'},{id:41237, text:'4'},{id:41238, text:'More than 4'}]}
  const expectedResult = [
    {id:41234, text:'1', count: 1, percentage: 50},
    {id:41235, text:'2', count: 0, percentage: 0},
    {id:41236, text:'3', count: 0, percentage: 0},
    {id:41237, text:'4', count: 1, percentage: 50},
    {id:41238, text:'More than 4', count: 0, percentage: 0}]
  // Act
  const result = select.getResults(state)  
  // Assert
  expect(result).toEqual(expectedResult)
});


it('getResults - 3 answers - 33% and 67%', () => {
  // Arrange  
  const state = {
    allAnswers: {a: 41234, b: 41237, c: 41237}, 
    surveyAnswers: [{id:41234, text:'1'},{id:41235, text:'2'},{id:41236, text:'3'},{id:41237, text:'4'},{id:41238, text:'More than 4'}]}
  const expectedResult = [
    {id:41234, text:'1', count: 1, percentage: 33},
    {id:41235, text:'2', count: 0, percentage: 0},
    {id:41236, text:'3', count: 0, percentage: 0},
    {id:41237, text:'4', count: 2, percentage: 67},
    {id:41238, text:'More than 4', count: 0, percentage: 0}]
  // Act
  const result = select.getResults(state)  
  // Assert
  expect(result).toEqual(expectedResult)
});