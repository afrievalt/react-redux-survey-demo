import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLoadData, select } from '../ducks/load-data.duck'
import { handleChangeAnswer, handleChangeError, handleSubmitAnswer } from '../ducks/answer-question.duck'
import { RadioGroup } from '../controls/radio-group'
import { Form } from '../controls/form'


export class QuestionContent extends Component {
  render() {
    return (
      <div className='show-question'>
        <Form 
            href="/results"
            isValid={this.props.isValid}
            handleSubmit={this.props.handleSubmitAnswer}
            handleInvalid={this.props.handleChangeError}
            >                    
            <RadioGroup
              groupName='householdGroup'
              textLabel={this.props.questionText}
              value={this.props.answer}
              onChange={this.props.handleChangeAnswer}
              options={this.props.questionAnswers}
            />
            <input type="submit" value="Show Results"/>                     
        </Form>
      </div>
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
    handleChangeError: () => dispatch(handleChangeError("Select answer please")),
    handleSubmitAnswer: () => dispatch(handleSubmitAnswer())
  }
}

export const ShowQuestion = connect(mapStateToProps, mapDispatchToProps)(QuestionContent)

export default ShowQuestion;
