import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
// import Work from './Work.js';
// import two from './images/two.jpeg';



const DataQuery = () => {
  const [countryNames, setCountryNames] = useState([]);
  const [percentages, setPercentages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://stats.oecd.org/restsdmx/sdmx.ashx/GetDataStructure/STLABOUR'
        );
        const xmlData = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');

        // Extract Country Names
        const countryCodeList = xmlDoc.querySelector('CodeList[id="CL_STLABOUR_LOCATION"]');
        const countryCodes = countryCodeList.querySelectorAll('Code');
        const countryNames = Array.from(countryCodes).map((code) => {
          const value = code.getAttribute('value');
          const description = code.querySelector('Description')?.textContent || '';
          return { value, description };
        });
        setCountryNames(countryNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    fetch(
      'https://stats.oecd.org/SDMX-JSON/data/STLABOUR/AUS+AUT+BEL+CAN+CHL+COL+CRI+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LVA+LTU+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+EU27_2020+EA20+G-7+OECD+RUS+ZAF.LREM64FE+LREM64MA+LREM64TT.STSA.A+Q/all?startTime=2019&endTime=2023&dimensionAtObservation=allDimensions'
    )
      .then((response) => response.json())
      .then((data) => {
        const observations = data.dataSets[0].observations;
        const extractedPercentages = [];

        for (const observationKey in observations) {
          const observation = observations[observationKey];
          const percentage = observation[0];
          extractedPercentages.push(percentage);
        }

        setPercentages(extractedPercentages);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderTableHeader = () => {
    const headerColumns = ['Country', ...Array.from(Array(13), (_, i) => 2015 + i)];

    return (
      <tr>
        {headerColumns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    );
  };

  const renderTableRows = () => {

    return countryNames.map((country, index) => {
      return (
        <tr key={index}>
          {/* First column: Image and description */}
          <td>
            <p>{country.description}</p>
          </td>
          {/* Second column: Percentage data */}
          {Array.from(Array(13), (_, i) => 2010 + i).map((year, yearIndex) => (
            <td key={yearIndex}>{percentages[yearIndex]}</td>
          ))}
        </tr>
      );
    });
  };

  useEffect(() => {
    $(document).ready(() => {
      $('.table-container').css('overflow-y', 'auto');
      $('.table-container').css('max-height', '400px'); // Adjust the height as needed
    });
  }, []);

  return (
    <div className="container">
      <h1 style={{ marginTop: '15px', textAlign: 'center' }}>Percentage Data</h1>
      <div className="row">
       
        <div className="col-md-8" style={{width:'650px' }}>
          <div className="table-container">
            <table className="table table-striped"  >
              <thead style={{ position: 'sticky', top: '0' }}>{renderTableHeader()}</thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
};

const Visuals = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div>
      <DataQuery />
    </div>
  );
};

export default Visuals;