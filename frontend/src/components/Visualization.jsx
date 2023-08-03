import React, { useEffect, useState } from "react";
import { getJobSearch } from "../services/GetData";
import "./styles/visualization.css";
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
    if (data) console.log(data);
  };

  return (
    <div className="wrap">
      <Container className="mt-5 ">
        <h3 className="font-weight-bold">Welcome to our Job Search Page</h3>
        <p>
          To use the search functionality, you can enter a keyword that
          corresponds to the job name you are looking for. Once you've entered
          the keyword, click the "Search" button to get the results. The page
          will display information about various jobs that match your search,
          including details about jobs at different companies.
        </p>
        <p>
          Additionally, you will find links to apply for each job listed in the
          search results. Clicking on the provided links will direct you to the
          application page for the respective job. Feel free to explore the
          different opportunities available and apply to your desired positions.
        </p>
      </Container>
      <Container>
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

        <div>
          {/* Display the data from the fetched response */}
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Job Title</th>
                  <th scope="col">Company</th>
                  <th scope="col">Location</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.hits?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.company_name}</td>
                    <td>{item.location}</td>
                    <td className="flex justify-center">
                      <a
                        className="btn btn-primary btn-sm"
                        href="{item.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Replace 'someProperty' with the actual property name you want to display */}
        </div>
      </Container>
    </div>
  );
};

export default Visualization;
