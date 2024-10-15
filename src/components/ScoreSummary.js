import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ScoreSummary() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Score</h1>
      <p className="mb-4">
        You scored {score} out of {total}.
      </p>
      <Link to="/" className="text-indigo-600 hover:underline">
        Take another quiz
      </Link>
    </div>
  );
}

export default ScoreSummary;
