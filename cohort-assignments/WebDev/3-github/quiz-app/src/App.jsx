import { useState } from 'react';
import './App.css';

function App() {

  const quizData = [
    {
      "question": "Which team has won the most Premier League titles?",
      "a": "Chelsea",
      "b": "Manchester City",
      "c": "Manchester United",
      "d": "Liverpool",
      "correct": "c",
    },
    {
      "question": "Who holds the record for the most goals scored in a single Premier League season?",
      "a": "Thierry Henry",
      "b": "Alan Shearer",
      "c": "Mohamed Salah",
      "d": "Erling Haaland",
      "correct": "d",
    },
    {
      "question": "Which Premier League club is nicknamed The Toffees?",
      "a": "Newcastle United",
      "b": "West Ham United",
      "c": "Everton",
      "d": "Aston Villa",
      "correct": "c",
    },
    {
      "question": "Who was the first Premier League manager to be knighted?",
      "a": "Sir Alex Ferguson",
      "b": "Sir Bobby Robson",
      "c": "Sir Kenny Dalglish",
      "d": "Sir Matt Busby",
      "correct": "a",
    },
    {
      "question": "Which club went an entire Premier League season unbeaten?",
      "a": "Chelsea",
      "b": "Arsenal",
      "c": "Manchester City",
      "d": "Liverpool",
      "correct": "b",
    },
    {
      "question": "Who is the Premier League's all-time leading goal scorer?",
      "a": "Wayne Rooney",
      "b": "Frank Lampard",
      "c": "Alan Shearer",
      "d": "Sergio Agüero",
      "correct": "c",
    },
    {
      "question": "Which player has made the most appearances in the Premier League?",
      "a": "Ryan Giggs",
      "b": "Frank Lampard",
      "c": "Gareth Barry",
      "d": "Steven Gerrard",
      "correct": "c",
    },
    {
      "question": "Which of the following teams has never been relegated from the Premier League since its inception?",
      "a": "Aston Villa",
      "b": "Everton",
      "c": "Leeds United",
      "d": "West Ham United",
      "correct": "b",
    },
    {
      "question": "Who won the Premier League Golden Boot for the 2022-23 season?",
      "a": "Harry Kane",
      "b": "Mohamed Salah",
      "c": "Erling Haaland",
      "d": "Son Heung-min",
      "correct": "c",
    },
    {
      "question": "Which team holds the record for the longest winning streak in Premier League history?",
      "a": "Manchester United",
      "b": "Chelsea",
      "c": "Manchester City",
      "d": "Liverpool",
      "correct": "c",
    }
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [correctOption, setCorrectOption] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmitOption = () => {
    const currentQuestion = quizData[selectedQuestion];
    if (selectedOption === currentQuestion.correct) {
      setCorrectOption(prev => prev + 1);
    }
    setSelectedQuestion(prev => prev + 1);
    setSelectedOption("");
  };

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      {selectedQuestion < quizData.length ? (
        <div className='mt-4 bg-neutral-200 w-[30rem] h-[30rem] overflow-auto rounded-lg shadow-lg flex flex-col items-center justify-between'>
          <h2 className='mt-4 text-2xl font-semibold text-center'>{quizData[selectedQuestion].question}</h2>
          <div className='flex flex-col items-start w-full p-16 gap-8'>
            <label><input type='radio' value="a" checked={selectedOption === "a"} name='options' onChange={handleOptionChange} /> {quizData[selectedQuestion].a}</label>
            <label><input type='radio' value="b" checked={selectedOption === "b"} name='options' onChange={handleOptionChange} /> {quizData[selectedQuestion].b}</label>
            <label><input type='radio' value="c" checked={selectedOption === "c"} name='options' onChange={handleOptionChange} /> {quizData[selectedQuestion].c}</label>
            <label><input type='radio' value="d" checked={selectedOption === "d"} name='options' onChange={handleOptionChange} /> {quizData[selectedQuestion].d}</label>
          </div>
          <button className='w-full bg-indigo-600 text-neutral-200 p-3 rounded-b-lg' onClick={handleSubmitOption}>Submit</button>
        </div>
      ) : (
        <h2 className="text-3xl">Quiz Complete! Correct Answers: {correctOption}</h2>
      )}
    </div>
  );
}

export default App;
