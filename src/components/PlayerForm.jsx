import { useState } from 'react';

export default function PlayerForm({ teamName, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') return;
    onSubmit({ name, number: parseInt(number), points: 0 });
    setName('');
    setNumber('');
    handleCloseForm();
  };

  const [isVisible, setIsVisible] = useState(false);
  const handleShowForm = () => setIsVisible(true);
  const handleCloseForm = () => setIsVisible(false);

  return (
    <>
      <button onClick={handleShowForm}>Add Player</button>
      <dialog open={isVisible} onClose={handleCloseForm}>
        <h2>Add player to {teamName}</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-field'>
            <label>Name:</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-field'>
            <label>Number:</label>
            <input
              type='number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className='flex'>
            <button
              className='btn-danger'
              type='button'
              onClick={() => {
                setName('');
                setNumber('');
                handleCloseForm();
              }}
            >
              Cancel
            </button>
            <button className='btn-success' type='submit'>
              Add Player
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
