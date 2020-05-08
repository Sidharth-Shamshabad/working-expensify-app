import React from 'react';

export default class ExamNameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            examName: ''
        }
    }
    onChange = (e) => {
        const examName = e.target.value;
        this.setState(() => ({ examName }));
    }
    handleChange = (e) => {
        const userExamName = e.target.value;
        this.setState(() => ({ userExamName }));
        this.props.history.push('/update_exam');
    }
    onSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.examName) {
          this.setState(() => ({ error: 'Please enter a valid exam name.' }));
        } else {
          this.setState(() => ({ error: '' }));
          this.props.onSubmit({
            examName: this.state.examName
          });
        }
    };
    render () {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Exam Name</h1> 
                </div>
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form"><input
                        className="text-input" 
                        type="text" 
                        placeholder="Enter Exam Name Here"
                        value={this.state.examName} 
                        onChange={this.onChange}
                        />
                    </div>
                    <button className="button">Create Exam</button>
                </form>
            </div>
        )
    }
}