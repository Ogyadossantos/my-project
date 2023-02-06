import React, { useState } from 'react';

const cars = [
  { id: 1, make: 'Camaro', model: 'z28' },
  { id: 2, make: 'Camaro', model: '2ss' },
  { id: 3, make: 'Benz', model: '300' },
  { id: 3, make: 'Benz', model: 's 550' },
  { id: 3, make: 'BMW', model: 'm340i' },
  { id: 3, make: 'BMW', model: 'ZLX' },
  
];

function Services() {
  
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  const selectedCar = cars.find((car) => car.id === selectedCarId);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(`Your booking for a ${selectedCar.make} ${selectedCar.model} from ${startDate} to ${endDate} has been confirmed.`);
  };

  if (confirmation) {
    return <p>{confirmation}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedCarId} onChange={(e) => setSelectedCarId(Number(e.target.value))}>
        <option value={null}>Select a car</option>
        {cars.map((car) => (
          <option key={car.id} value={car.id}>
            {car.make} {car.model}
          </option>
        ))}
      </select>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button type="submit" disabled={!selectedCarId || !startDate || !endDate}>
        Book 
      </button>
    </form>
    
  );
}

export default Services;
