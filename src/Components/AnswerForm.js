import React, { Component } from 'react'
import {Segment, Container, Form, Input, Button, Header, TextArea} from 'semantic-ui-react'
import '../App.css'

export default class AnswerForm extends Component {

    state = {
        answer: "",
        token: localStorage.token
    }

    

    handleChange = (e) => {
        // debugger
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // debugger
        e.preventDefault()
        let answer = this.state.answer
        // console.log(this.state.answer)
        this.setState({
            answer: ""
        }, () =>  this.props.handleSubmit(answer))
       
    }


    render() {
        return (
            <div>
                <h3 style={{"margin-bottom":"14px"}}>{this.props.question}</h3>
            <Form style={{"display":"flex", "justify-content":"center", "align-items":"center"}} onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Input
          width={11}
              fluid
              placeholder="Insert Clever Answer Here" 
              name="answer"
              value={this.state.answer}
              onChange={this.handleChange}
              required
              />
             <Button id="submit-button" style={{"font-family":"Special Elite", "border-radius": "10px"}} type="submit">Submit Answer</Button>
            </Form>
           
            
            </div>
        )
   
    }
}
