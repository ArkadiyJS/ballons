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
        { id: 298, value: 40.2 },
        { id: 301, value: 39.8 },
        { id: 306, value: 39.6 },
        { id: 310, value: 41.9 },
        { id: 311, value: 42 },
        { id: 313, value: 34.2 },
        { id: 321, value: 41 },
        { id: 324, value: 40.1 },
        { id: 326, value: 43 },
        { id: 329, value: 40.6 },
        { id: 330, value: 35.3 },
        { id: 8, value: 41.5 },
        { id: 335, value: 37.1 },
        { id: 336, value: 41.1 },
        { id: 337, value: 41.5 },
        { id: 340, value: 40.6 },
        { id: 341, value: 40.5 },
        { id: 344, value: 36.5 },
        { id: 345, value: 41.5 },
        { id: 347, value: 39.3 },
        { id: 352, value: 34.2 },
        { id: 359, value: 40.3 },
        { id: 362, value: 36.3 },
        { id: 363, value: 35 },
        { id: 365, value: 40.6 },
        { id: 366, value: 34.2 },
        { id: 368, value: 40.4 },
        { id: 369, value: 35.8 },
        { id: 371, value: 41.3 },
        { id: 372, value: 40 },
        { id: 374, value: 34.9 },
        { id: 375, value: 34.4 },
        { id: 376, value: 39.9 },
        { id: 378, value: 40.9 },
        { id: 379, value: 41.7 },
        { id: 380, value: 34.4 },
        { id: 385, value: 39.5 },
        { id: 387, value: 41.3 },
        { id: 388, value: 40.6 },
        { id: 390, value: 41.1 },
        { id: 394, value: 40.2 },
        { id: 395, value: 40.2 },
        { id: 396, value: 40.3 },
        { id: 398, value: 41.3 },
        { id: 399, value: 41.1 },
        { id: 400, value: 40 },
        { id: 401, value: 39.2 },
        { id: 410, value: 39.8 },
        { id: 416, value: 38.9 },
        { id: 419, value: 41.5 },
        { id: 420, value: 34.5 },
        { id: 422, value: 41.8 },
        { id: 423, value: 42 },
        { id: 425, value: 35.3 },
        { id: 429, value: 41.4 },
        { id: 431, value: 35.3 },
        { id: 432, value: 40.2 },
        { id: 434, value: 41.1 },
        { id: 435, value: 41.7 },
        { id: 436, value: 41.9 },
        { id: 437, value: 40.7 },
        { id: 438, value: 41.2 },
        { id: 439, value: 34.7 },
        { id: 440, value: 35.4 },
        { id: 443, value: 40 },
        { id: 444, value: 40.4 },
        { id: 445, value: 35.6 },
        { id: 447, value: 40.6 },
        { id: 449, value: 40.1 },
        { id: 452, value: 38.5 },
        { id: 453, value: 35.7 },
        { id: 457, value: 40.8 },
        { id: 458, value: 41.3 },
        { id: 460, value: 40.2 },
        { id: 463, value: 40.5 },
        { id: 464, value: 40.8 },
        { id: 467, value: 40.9 },
        { id: 468, value: 39 },
        { id: 469, value: 42.3 },
        { id: 470, value: 42 },
        { id: 471, value: 41.8 },
        { id: 473, value: 41.5 },
        { id: 474, value: 41.8 },
        { id: 475, value: 41.9 },
        { id: 477, value: 41.1 },
        { id: 480, value: 42.6 },
        { id: 483, value: 39.2 },
        { id: 484, value: 40.9 },
        { id: 487, value: 33.6 },
        { id: 488, value: 40.5 },
        { id: 489, value: 39.4 },
        { id: 491, value: 34.3 },
        { id: 494, value: 42.3 },
        { id: 495, value: 40.6 },
        { id: 350, value: 40.1 },
        { id: 223, value: 41.2 },
        { id: 269, value: 42.2 },
        { id: 262, value: 39.7 },
        { id: 493, value: 39.8 },
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
        <>
            <h1>CO2</h1>
            <p>Вы сказали: {transcript}</p>

            <p >Вес баллона:<h1 style={{color:`yellow`}}>{value}</h1> </p>
            <p >должен весить: <h1 style={{color:`green`}}> {value + 13.6 }</h1>  </p>
            <button onClick={() => location.reload()}>Перезагрузить</button>

        </>
    );
}

export default SpeechRecognitionComponent;