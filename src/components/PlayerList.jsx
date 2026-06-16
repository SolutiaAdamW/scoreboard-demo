export default function PlayerList({ players, onScoreChange }) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>#</th>
        <th>Points</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tbody>
        {players.map((player) => (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>{player.number}</td>
            <td>{player.points}</td>
            <td>
              <button
                className='btn-success'
                onClick={() => onScoreChange(player.name, 1)}
              >
                +1
              </button>
            </td>
            <td>
              <button
                className='btn-success'
                onClick={() => onScoreChange(player.name, 2)}
              >
                +2
              </button>
            </td>
            <td>
              <button
                className='btn-success'
                onClick={() => onScoreChange(player.name, 3)}
              >
                +3
              </button>
            </td>
            <td>
              <button
                className='btn-danger'
                onClick={() => onScoreChange(player.name, -1)}
              >
                -1
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
