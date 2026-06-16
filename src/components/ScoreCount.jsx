export default function ScoreCount({ teamName, score }) {
  return (
    <div>
      <h2>{teamName}</h2>
      <p className='score-count'>{score}</p>
    </div>
  );
}
