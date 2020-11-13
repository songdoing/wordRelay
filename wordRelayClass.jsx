const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
        word: 'hello',
        value: '',
        result: ''
    };

    onSubmitForm = (e) => {
    
    }

    onChangeInput = (e) => {

    }

    input;

    onRefInput = (ref) => {
        this.input = ref;
    };

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit = {this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange= {this.onChangeInput} />
                    <button>Enter</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports=WordRelay;