import { useEffect, useState, useRef } from 'react';




function SpeechRecognitionComponent() {
    const [transcript, setTranscript] = useState('');
    const [value, setValue] = useState();
    const recognitionRef = useRef(null);

    const ballons = [{ id: 345, value: 12 }, { id: 12, value: 13 }, { id: 300, value: 14 }, { id: 500, value: 15 },]

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
        <div>
            <h1>CO2</h1>
            <p>Вы сказали: {transcript}</p>

            <p>Вес баллона: {value}</p>

        </div>
    );
}

export default SpeechRecognitionComponent;