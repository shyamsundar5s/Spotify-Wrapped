import React, { useState } from 'react';

function CustomDateRange({ onDateChange }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = () => {
    if (startDate && endDate) {
      onDateChange({ startDate, endDate });
    }
  };

  return (
    <div className="custom-date-range">
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Apply</button>
    </div>
  );
}

export default CustomDateRange;
