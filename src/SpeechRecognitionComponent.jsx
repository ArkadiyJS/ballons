import { useEffect, useState, useRef } from "react";
import { ballons } from "./data";

function SpeechRecognitionComponent() {
  const [transcript, setTranscript] = useState("");
  const [value, setValue] = useState(0);
  const [years, setYears] = useState(0);
  const [data, setData] = useState(0);
  const [color, SetColor] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    getDate();
    // Проверка поддержки браузером webkitSpeechRecognition
    if (!("webkitSpeechRecognition" in window)) {
      console.error("Speech recognition not supported");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "ru-RU";

    recognition.onresult = (event) => {
      const resultIndex = event.results.length - 1;
      const newTranscript = event.results[resultIndex][0].transcript.trim();

      setTranscript(newTranscript[0][1][2]);

      ballons.find((t) => {
        t.id == newTranscript ? setValue(t.value) : " ";
      });
      ballons.find((t) => {
        t.id == newTranscript ? setYears(t.years) : " ";
      });
    };

    recognitionRef.current = recognition;
    recognition.start();

    speechSynthesis.cancel();
    const utterence = new SpeechSynthesisUtterance(value);

    // speechSynthesis.speak(utterence)

    const checkingTheYear = () => {
      const sum = years - data;

      if (sum > 1) {
        return SetColor("green");
      } else return SetColor("red");
    };
    checkingTheYear();
  }, [transcript]);

  const getDate = () => {
    const years = new Date().getFullYear();
    const lastTwoNumbers = years % 1000;
    return setData(lastTwoNumbers);
  };

  return (
    <div className="App">
      <h1>CO2</h1>
      <div className="item">Вы сказали: {transcript}</div>

      <div className="item1">
        Вес баллона: <h2 style={{ color: `yellow` }}> {value}</h2>{" "}
      </div>
      <div className="item2">
        должен весить: <h2 style={{ color: `green` }}> {value + 13.6}</h2>{" "}
      </div>
      <div className="item3" style={{ border: `3px solid ${color}` }}>
        след. проверка в <h2 style={{ color: color }}> {years} году</h2>{" "}
      </div>

      <button
        className="glow-on-hover"
        type="button"
        onClick={() => location.reload()}
      >
        Перезагрузить
      </button>
    </div>
  );
}

export default SpeechRecognitionComponent;
