import React, { useEffect, useState } from 'react';

const Visualization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://indeed-indeed.p.rapidapi.com/apisearch?publisher=%3CREQUIRED%3E&v=2&format=json&callback=%3CREQUIRED%3E&q=java&l=austin%2C%20tx&sort=%3CREQUIRED%3E&radius=25&st=%3CREQUIRED%3E&jt=%3CREQUIRED%3E&start=%3CREQUIRED%3E&limit=%3CREQUIRED%3E&fromage=%3CREQUIRED%3E&highlight=%3CREQUIRED%3E&filter=%3CREQUIRED%3E&latlong=%3CREQUIRED%3E&co=%3CREQUIRED%3E&chnl=%3CREQUIRED%3E&userip=%3CREQUIRED%3E&useragent=%3CREQUIRED%3E';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'aa20d7744emsh4d63d26ca5e58e8p12bb01jsn5d58bed9de30',
          'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result); // Store the fetched data in the state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      {/* Render the data here */}
      {data.map((item, index) => (
        <div key={index}>
          {/* Display the data from the fetched response */}
          <p>{item.someProperty}</p>
          {/* Replace 'someProperty' with the actual property name you want to display */}
        </div>
      ))}
    </div>
  );
};

export default Visualization;
