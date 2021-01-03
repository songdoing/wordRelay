const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('jenny');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]) {
            setResult('Good job!'),
            setWord(value);
            setValue('');
           
            inputRef.current.focus();
        } else {
            setResult('Try again.');
            setValue('');
            
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <h1>Word Chain Game!!</h1>
                <h3>Input a word.</h3>
                <div>{word}</div>
                <form onSubmit = {onSubmitForm}>
                    <input ref={inputRef} value={value} onChange={onChangeInput} />
                    <button>ENTER</button>
                </form>
                <div>{result}</div>       
        </>
    );
};

module.exports=WordRelay;