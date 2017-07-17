import {autoReducer} from './auto-reducer'

const state = {
  emailAddress: '',
  'newUser.age': 'anderson',
  'newUser.emailAddress': 'tom',
  'newUser.riskTolerence': '23',
  'newUser.gender': 'Male',
  '_selected-newUser': '21fb8680-6731-11e7-bcbf-e3a12f874565',
  newUser_allIds: ['21fb8680-6731-11e7-bcbf-e3a12f874565'],
  newUser_byId: {
    '21fb8680-6731-11e7-bcbf-e3a12f874565': {
      age: 'anderson',
      emailAddress: 'tom',
      riskTolerence: '23',
      gender: 'Male'
    }
  }
}

it('deleteReducer - when no payload - should remove selected item', () => {
  const expectedResult = {
    emailAddress: '',    
    newUser_allIds: [],
    newUser_byId: {}
  }
  const action = {
    type: 'newUser__DELETE'
  }
  //act
  const result = autoReducer(state, action)
  expect(result).toEqual(expectedResult)
});

it('newUser__DELETE - with second row selected - delete second row', () => {
  // Arrange
  const action = {type:'newUser__DELETE'}
  const prevState = {emailAddress:'','_selected-newUser':'61ca6df0-67d9-11e7-a975-119a66d0d3c9','newUser.emailAddress':'b','newUser.age':'b','newUser.riskTolerence':'b','newUser.gender':'Male',newUser_allIds:['5dc97f20-67d9-11e7-a975-119a66d0d3c9','61ca6df0-67d9-11e7-a975-119a66d0d3c9','64e590a0-67d9-11e7-a975-119a66d0d3c9'],newUser_byId:{'5dc97f20-67d9-11e7-a975-119a66d0d3c9':{emailAddress:'a',age:'a',riskTolerence:'a',gender:'Male'},'61ca6df0-67d9-11e7-a975-119a66d0d3c9':{emailAddress:'b',age:'b',riskTolerence:'b',gender:'Male'},'64e590a0-67d9-11e7-a975-119a66d0d3c9':{emailAddress:'c',age:'c',riskTolerence:'c',gender:'Female'}}}
  const expectedResult = {emailAddress:'',newUser_allIds:['5dc97f20-67d9-11e7-a975-119a66d0d3c9','64e590a0-67d9-11e7-a975-119a66d0d3c9'],newUser_byId:{'5dc97f20-67d9-11e7-a975-119a66d0d3c9':{emailAddress:'a',age:'a',riskTolerence:'a',gender:'Male'},'64e590a0-67d9-11e7-a975-119a66d0d3c9':{emailAddress:'c',age:'c',riskTolerence:'c',gender:'Female'}}}
  // Act
  const result = autoReducer(prevState, action);
  // Assert
  expect(result).toEqual(expectedResult)
});

it("newUser.emailAddress__CHANGE - with payload:'2'' - sets newUser.emailAddress':'2'", () => {
  // Arrange
const action = {type:'newUser.emailAddress__CHANGE',payload:'2'}
const prevState = {emailAddress:''}
  const expectedResult = {emailAddress:'','newUser.emailAddress':'2'}
// Act
const result = autoReducer(prevState, action);
// Assert
expect(result).toEqual(expectedResult)
});




