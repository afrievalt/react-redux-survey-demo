import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLoadData, select } from '../ducks/load-data.duck'
import { handleChangeAnswer, handleChangeError, handleSubmitAnswer } from '../ducks/answer-question.duck'
import { RadioInputAuto } from '../controls/radio-input-auto'
import { FormAuto } from '../controls/form-auto'


export class FirstSectionContent extends Component {
  
  render() {
    return (
      <FormAuto 
          path="newUser" 
          href="/results"
          isValid={this.props.isValid}
          handleSubmit={this.props.handleSubmitAnswer}
          handleInvalid={this.props.handleChangeError}
          >                    
          <RadioInputAuto
            textLabel={this.props.questionText}
            value={this.props.answer}
            onChange={this.props.handleChangeAnswer}
            options={this.props.questionAnswers}
          />
          <input type="submit" value="Add"/>                     
      </FormAuto>  
    )    
  }  

  componentWillMount() {    
    this.props.handleLoadData()
  }  
}

const mapStateToProps = (state) => {  
  return {
    questionText: select.questionText(state),
    questionAnswers: select.questionAnswers(state),
    answer: state.answer,
    isValid: !!state.answer
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {    
    handleLoadData: () => dispatch(handleLoadData()),
    handleChangeAnswer: payload => dispatch(handleChangeAnswer(payload)),
    handleChangeError: () => dispatch(handleChangeError("Select answer.")),
    handleSubmitAnswer: () => dispatch(handleSubmitAnswer())
  }
}


export const FirstSection = connect(mapStateToProps, mapDispatchToProps)(FirstSectionContent)

export default FirstSection;
