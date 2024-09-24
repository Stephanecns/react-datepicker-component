import React, { useState } from 'react';
import CustomDatePicker from './components/DatePicker';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React DatePicker Component</h1>
      <CustomDatePicker
        label="Select a Date"
        selectedDate={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
};

export default App;
