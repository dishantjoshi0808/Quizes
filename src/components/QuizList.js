import React from 'react';
import { Link } from 'react-router-dom';

const quizzes = [
  { id: 1, title: 'JavaScript Basics'},
  { id: 2, title: 'React Basics' },
  { id: 4, title: 'JavaScript Fundamentals' },
  { id: 7, title: 'CSS Fundamentals'},
  { id: 8, title: 'CSS Basics'},
];

function QuizList() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4"> QuizList</h1>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.id} className="border p-4 mb-4 rounded">
            <h2 className="text-xl font-semibold">{quiz.title}</h2>
            <p>{quiz.description}</p>
            <Link
              to={`/quiz/${quiz.id}`}
              className="text-indigo-600 hover:underline"
            >
              Start Quiz
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
