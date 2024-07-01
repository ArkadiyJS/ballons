import { useEffect, useState, useRef } from 'react';
import { ballons } from './data';




function SpeechRecognitionComponent() {
    const [transcript, setTranscript] = useState('');
    const [value, setValue] = useState(0);
    const recognitionRef = useRef(null);




    useEffect(() => {
        // Проверка поддержки браузером webkitSpeechRecognition
        if (!('webkitSpeechRecognition' in window)) {
            console.error('Speech recognition not supported');
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.lang = 'ru-RU';

        recognition.onresult = (event) => {
            const resultIndex = event.results.length - 1;
            const newTranscript = event.results[resultIndex][0].transcript.trim();

            setTranscript(newTranscript);

            ballons.find((t) => { t.id == newTranscript ? setValue(t.value) : ' ' })

        };

        recognitionRef.current = recognition;
        recognition.start();

        speechSynthesis.cancel();
        const utterence = new SpeechSynthesisUtterance(value)
        speechSynthesis.speak(utterence)


    }, [transcript]);

    return (
        <div className="App">
            <h1>CO2</h1>
            <div className='item'>Вы сказали: {transcript}</div>

            <div className='item1'>Вес баллона: <h2 style={{ color: `yellow` }}> {value}</h2> </div>
            <div className='item2'>должен весить: <h2 style={{ color: `green` }}> {value + 13.6}</h2>  </div>
            <button className="glow-on-hover" type='button' onClick={() => location.reload()}>Перезагрузить</button>

        </div>
    );
}

export default SpeechRecognitionComponent;