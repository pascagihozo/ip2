import React, { useState, useEffect } from 'react';

const Visualization = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Function to fetch data from the API and set it in the state
    const fetchData = async () => {
      try {
        const response = await fetch('your_api_url_here');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to filter data based on the search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Data Visualization</h1>
      <input
        type="text"
        className="bg-white text-black rounded-md p-2 mb-4"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>{item.description}</p>
            {/* Add more data visualization elements as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visualization;
