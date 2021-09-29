import '../App.css';
import { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';

export default function TextToSpeech() {
    const { speak } = useSpeechSynthesis();
    const [name, setName] = useState('')
    const captureName = (event) => {
        setName(event.target.value)
    }
    return (
        <div className="App">
            <label>Enter name </label>
            <input type="text" name="username" onChange={captureName} />
            
            <br />
            <button onClick={() => speak({ text: name })}>Speak</button>
        </div>
    );
}