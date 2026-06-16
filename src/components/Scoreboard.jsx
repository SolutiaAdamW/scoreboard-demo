import PlayerList from './PlayerList';
import ScoreCount from './ScoreCount';
import PlayerForm from './PlayerForm';
import { useState, useEffect } from 'react';

export default function Scoreboard() {
  const [homePlayers, setHomePlayers] = useState([
    { name: 'Player 1', number: 10, points: 0 },
    { name: 'Player 2', number: 20, points: 0 },
    { name: 'Player 3', number: 30, points: 0 },
  ]);
  const homeScore = homePlayers.reduce(
    (total, player) => total + player.points,
    0,
  );
  const updateHomePoints = (playerName, pointsToAdd) => {
    setHomePlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === playerName
          ? { ...player, points: player.points + pointsToAdd }
          : player,
      ),
    );
  };
  const addHomePlayer = (player) => {
    setHomePlayers((prevPlayers) => [...prevPlayers, player]);
  };

  const [awayPlayers, setAwayPlayers] = useState([
    { name: 'Player A', number: 11, points: 0 },
    { name: 'Player B', number: 22, points: 0 },
    { name: 'Player C', number: 33, points: 0 },
  ]);
  const awayScore = awayPlayers.reduce(
    (total, player) => total + player.points,
    0,
  );
  const updateAwayPoints = (playerName, pointsToAdd) => {
    setAwayPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === playerName
          ? { ...player, points: player.points + pointsToAdd }
          : player,
      ),
    );
  };
  const addAwayPlayer = (player) => {
    setAwayPlayers((prevPlayers) => [...prevPlayers, player]);
  };

  return (
    <div className='flex'>
      <div>
        <ScoreCount teamName='Home' score={homeScore} />
        <PlayerList players={homePlayers} onScoreChange={updateHomePoints} />
        <div className='flex'>
          <PlayerForm teamName='Home' onSubmit={addHomePlayer} />
          <button
            onClick={() => {
              setHomePlayers(
                homePlayers.map((player) => ({ ...player, points: 0 })),
              );
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div>
        <ScoreCount teamName='Away' score={awayScore} />
        <PlayerList players={awayPlayers} onScoreChange={updateAwayPoints} />
        <div className='flex'>
          <PlayerForm teamName='Away' onSubmit={addAwayPlayer} />
          <button
            onClick={() => {
              setAwayPlayers(
                awayPlayers.map((player) => ({ ...player, points: 0 })),
              );
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
