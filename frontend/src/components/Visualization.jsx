import React, { useEffect, useState } from "react";
import { getJobSearch } from "../services/GetData";
import {
  Button,
  Col,
  Container,
  FormControl,
  Row,
  Spinner,
} from "react-bootstrap";

const Visualization = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // getJobSearch("developer", "chicago");
    // const fetchData = async () => {
    //   const url = 'https://indeed-indeed.p.rapidapi.com/apisearch?publisher=%3CREQUIRED%3E&v=2&format=json&callback=%3CREQUIRED%3E&q=java&l=austin%2C%20tx&sort=%3CREQUIRED%3E&radius=25&st=%3CREQUIRED%3E&jt=%3CREQUIRED%3E&start=%3CREQUIRED%3E&limit=%3CREQUIRED%3E&fromage=%3CREQUIRED%3E&highlight=%3CREQUIRED%3E&filter=%3CREQUIRED%3E&latlong=%3CREQUIRED%3E&co=%3CREQUIRED%3E&chnl=%3CREQUIRED%3E&userip=%3CREQUIRED%3E&useragent=%3CREQUIRED%3E';
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': 'aa20d7744emsh4d63d26ca5e58e8p12bb01jsn5d58bed9de30',
    //       'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
    //     }
    //   };
    //   try {
    //     const response = await fetch(url, options);
    //     const result = await response.json();
    //     setData(result); // Store the fetched data in the state
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchData();
  }, []);

  const handleSearch = async (keyword) => {
    setIsLoading(true);
    const data = await getJobSearch(keyword, "chicago");
    setData(data);
    setIsLoading(false);
  };

  return (
    <Container className="">
      <Row className="mt-24 p-4">
        <Col xl={9} sm={12}>
          <input
            onChange={(e) => setKeyword(e.target.value)}
            className="p-2 w-100 bg-white text-black"
            type="text"
            placeholder="Enter job name and location"
          />
        </Col>
        <Col xl={3} sm={12}>
          <Button
            onClick={() => handleSearch(keyword)}
            className="p-2 bg-primary w-100"
          >
            Search
          </Button>
        </Col>
      </Row>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {/* Render the data here */}
      {data?.hits?.map((item, index) => (
        <div key={index}>
          {/* Display the data from the fetched response */}
          <div class="table-responsive">
  <table class="table table-striped table-bordered">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Job Title</th>
        <th scope="col">Company</th>
        <th scope="col">Location</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{item.title}</td>
        <td>{item.company_name}</td>
        <td>{item.location}</td>
        <td>
          <a class="btn btn-primary btn-sm" href="{item.link}" target="_blank" rel="noopener noreferrer">Apply</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>


          {/* Replace 'someProperty' with the actual property name you want to display */}
        </div>
      ))}
    </Container>
  );
};

export default Visualization;
