import React, { useEffect, useState } from 'react';
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchCountryData } from '../services/GetData';
import { Col, Row } from 'react-bootstrap';

function Work() {
  const [data, setData] = useState([]);
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      
      const jsonData = await fetchCountryData();
      const observations = jsonData.dataSets[0].observations;
      const rateValues = Object.values(observations).map((value) => value[0]);
      setRates(rateValues);

      // Fetch country data
      const response2 = await fetch(
        'https://stats.oecd.org/restsdmx/sdmx.ashx/GetDataStructure/AV_AN_WAGE'
      );
      const xmlData = await response2.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
      const countryCodes = xmlDoc.getElementsByTagName('Code');
      const countries = Array.from(countryCodes).map(
        (code) => code.getElementsByTagName('Description')[0].textContent
      );
      setData(countries.slice(0, 38)); // Only take the first ten countries
    } catch (error) {
      console.log(error);
    }
  };

  const chartData = data.map((country, index) => {
    const ratesForCountry = rates.slice(index * 23, (index + 1) * 23);
    const sumOfRates = ratesForCountry.reduce((sum, rate) => sum + rate, 0);
    const sumOfRatesPercentage = (sumOfRates / (23 * 100)).toFixed(2); // Convert sum to percentage
    return {
      name: country,
      rates: parseFloat(sumOfRatesPercentage),
    };
  });

  // Pie Chart Data
  const pieChartData = chartData.map((entry) => ({
    name: entry.name,
    value: entry.rates,
  }));

  return (
    <div className='p-4'>
      <div className="container mt-32">
        <div style={{ marginTop: '15px', marginBottom: '20px' }}>
          <h2 style={{ marginTop: '15px', textAlign: 'center' }}>Average Wage</h2>
          <p>
            The provided chart for the year 2023 offers a comprehensive view of the average wages in several countries,
            providing valuable insights into the economic conditions and wage trends in the region. Through cross-country
            comparisons, policymakers, businesses, and researchers can assess the relative prosperity and disparities among
            these nations, aiding in decision-making related to economic stability, labor market competitiveness, and social
            welfare policies. source
          </p>
        </div>
          <Row>
          <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => value.toFixed(2) + '%'} />
                <Legend />
                <Line dataKey="rates" name="Average Wage" />
              </LineChart>
            </ResponsiveContainer>
            </div>
            </Row>
        <Row>
          <Col xl={6} md={6} sm={12} style={{ height: "600px"}}>
          <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
                <Tooltip formatter={(value) => value.toFixed(2) + '%'} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
          <Col xl={6} md={6} sm={12} style={{ height: "400px"}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => value.toFixed(2) + '%'} />
                <Legend />
                <Bar dataKey="rates" fill="#8884d8" name="Average Wage" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Work;
