const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
        word : 'jenny',
        value : '',
        result : '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result : 'Good job!',
                word : this.state.value,
                value : '',
            });
            this.input.focus();
        } else {
            this.setState({
                result : 'Try again.',
                value : '',
            });
            this.input.focus();
        }
    };

    onChangeInput = (e) => {
        this.setState( { value : e.target.value });
    };

    input; //this.input

    onRefInput = (c) => {
        this.input= c;
    };    

    render() {
        return (
            <>
                <h1>Word Chain Game!!</h1>
                <h3>Input a word.</h3>
                <div>{this.state.word}</div>
                <form onSubmit = {this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>ENTER</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports=WordRelay;