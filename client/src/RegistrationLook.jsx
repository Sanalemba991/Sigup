import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegistrationLook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    // Use axios.get for GET request
    const fetchData = async () => {
      try {
        // Send a GET request to your backend API endpoint
        const response = await axios.get("http://localhost:4000/reservation");
        
        // Destructure data from response
        const { data } = response;

        // Set the fetched data to the state
        setData(data);

        // Stop loading once the data is fetched
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs only once, when the component mounts

  // Display loading, error, or the actual data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Reservations</h1>
      <ul>
        {data.map((reservation) => (
          <li key={reservation._id}>
            <p>{reservation.name} - {reservation.date}</p>
            <p>{reservation.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegistrationLook;
