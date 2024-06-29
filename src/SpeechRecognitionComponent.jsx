import { useEffect, useState, useRef } from 'react';




function SpeechRecognitionComponent() {
    const [transcript, setTranscript] = useState('');
    const [value, setValue] = useState();
    const recognitionRef = useRef(null);

    const ballons = [
        { id: 4, value: 36.1 },
        { id: 6, value: 40.3 },
        { id: 11, value: 40.1 },
        { id: 12, value: 41 },
        { id: 13, value: 40 },
        { id: 17, value: 38.6 },
        { id: 19, value: 41.5 },
        { id: 24, value: 40.9 },
        { id: 25, value: 38.9 },
        { id: 27, value: 41.3 },
        { id: 31, value: 37.1 },
        { id: 32, value: 40.5 },
        { id: 37, value: 38.9 },
        { id: 46, value: 40.5 },
        { id: 58, value: 44 },
        { id: 64, value: 39.7 },
        { id: 72, value: 39.3 },
        { id: 73, value: 41.9 },
        { id: 77, value: 39.9 },
        { id: 82, value: 40.1 },
        { id: 84, value: 42.1 },
        { id: 86, value: 41.8 },
        { id: 92, value: 35.8 },
        { id: 94, value: 41.1 },
        { id: 95, value: 39 },
        { id: 102, value: 35.9 },
        { id: 103, value: 41.2 },
        { id: 105, value: 42.7 },
        { id: 107, value: 40.8 },
        { id: 109, value: 41.9 },
        { id: 114, value: 40.5 },
        { id: 121, value: 41.7 },
        { id: 123, value: 35.9 },
        { id: 124, value: 43.1 },
        { id: 126, value: 41.3 },
        { id: 129, value: 40.5 },
        { id: 130, value: 33.3 },
        { id: 135, value: 41.4 },
        { id: 146, value: 40 },
        { id: 147, value: 42.5 },
        { id: 149, value: 39.3 },
        { id: 150, value: 39.4 },
        { id: 157, value: 35.1 },
        { id: 160, value: 34.5 },
        { id: 161, value: 33.6 },
        { id: 163, value: 34.2 },
        { id: 168, value: 35.4 },
        { id: 171, value: 34.6 },
        { id: 173, value: 33.7 },
        { id: 175, value: 34.7 },
        { id: 176, value: 34.5 },
        { id: 180, value: 41.7 },
        { id: 181, value: 33.8 },
        { id: 182, value: 33.6 },
        { id: 184, value: 36 },
        { id: 185, value: 33.5 },
        { id: 186, value: 34.5 },
        { id: 188, value: 40.2 },
        { id: 189, value: 41.7 },
        { id: 190, value: 34.8 },
        { id: 191, value: 33.7 },
        { id: 197, value: 41.6 },
        { id: 198, value: 41.2 },
        { id: 207, value: 36.1 },
        { id: 225, value: 35 },
        { id: 228, value: 41.6 },
        { id: 232, value: 35.1 },
        { id: 234, value: 40.5 },
        { id: 238, value: 41.8 },
        { id: 241, value: 39.8 },
        { id: 242, value: 41.2 },
        { id: 266, value: 36.9 },
        { id: 248, value: 39.5 },
        { id: 252, value: 34 },
        { id: 255, value: 41.2 },
        { id: 256, value: 41.8 },
        { id: 257, value: 42.3 },
        { id: 258, value: 41.1 },
        { id: 259, value: 42 },
        { id: 260, value: 39.7 },
        { id: 264, value: 38.6 },
        { id: 271, value: 34.2 },
        { id: 276, value: 41 },
        { id: 280, value: 34.1 },
        { id: 286, value: 40.9 },
        { id: 287, value: 40.9 },
        { id: 289, value: 42.4 },
        { id: 292, value: 35.5 },
        { id: 172, value: 33.6 },
        { id: 291, value: 35.3 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },
        { id: 500, value: 15 },]


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
            <h1>Вы сказали: {transcript}</h1>

            <h1>Вес баллона: {value}</h1>
            <h1>должен весить:{value + 13.6 }  </h1>
            <button onClick={() => location.reload()}>Перезагрузить</button>

        </div>
    );
}

export default SpeechRecognitionComponent;