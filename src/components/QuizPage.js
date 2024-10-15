import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const quizQuestions = [
  {
    question: 'What is React?',
    options: ['Library', 'Framework', 'Language', 'None'],
    answer: 'Library',
  },
  {
    question: 'Who created React?',
    options: ['Google', 'Facebook', 'Microsoft', 'Twitter'],
    answer: 'Facebook',
  },
];

function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); 

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      navigate('/score', { state: { score, total: quizQuestions.length } }); 
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>
      <p className="mb-4">{currentQuestion.question}</p>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => handleAnswerSelection(option)}
              className={`px-4 py-2 border rounded ${
                selectedAnswer === option ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="bg-indigo-500 text-white px-4 py-2 mt-4 rounded"
      >
        {currentQuestionIndex < quizQuestions.length - 1 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
}

export default QuizPage;
