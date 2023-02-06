import React, { useState } from 'react';

function Contact() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div>
        <p>Your booking for the car is confirmed {selectedDate} is confirmed!</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  }

  return (
    <div>
      <Calendar onDateSelect={handleDateSelect} selected={selectedDate} />
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

function Calendar({ onDateSelect, selected }) {
  return (
    <table>
      {/* Calendar code here */}
      <tr>
        <td className={selected === '2023-01-01' ? 'selected' : ''} onClick={() => onDateSelect('2023-01-01')}>
          1
        </td>
        <td className={selected === '2023-01-02' ? 'selected' : ''} onClick={() => onDateSelect('2023-01-02')}>
          2
        </td>
        
      </tr>
    </table>
  );
}

export default Contact;
