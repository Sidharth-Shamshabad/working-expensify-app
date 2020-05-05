import React from 'react';

export default class MultipleChoiceQuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: props.description,
            options: props.options,
            answer: props.answer
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Question"
                    autoFocus
                    className="text-input"
                    value={this.state.question}
                />
                <input 
                    
                />
            </div>
        )
    }
}