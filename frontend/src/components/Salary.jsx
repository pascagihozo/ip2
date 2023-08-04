import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getJobSalaryData } from '../services/GetData';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right'
    },
    title: {
      display: true,
      text: 'Salary Ranges by Publisher',
    },
  },
};

const Salary = () => {
    const [data, setData] = useState([]);
    const [salaryData, setSalaryData] = useState(null);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async () => {
        setLoading(true);
        const searchTerm = keyword.split(",")

        const salaryData = await getJobSalaryData(searchTerm[0]?.trim(), searchTerm[1]?.trim());
        setData(salaryData);
        setLoading(false);
    }
  
    useEffect(() => {
      if (!data || data?.length === 0) {
        return;
      }

      const labels = data?.map(item => item.publisher_name);
      const minSalaries = data?.map(item => item.min_salary);
      const maxSalaries = data?.map(item => item.max_salary);
  
      setSalaryData({
        labels,
        datasets: [
          {
            label: 'Min Salary',
            data: minSalaries,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Max Salary',
            data: maxSalaries,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });
    
    }, [data]);

    return (
        <div className="mt-24">
        <div style={{ display: "flex", justifyContent: "center"}} className='m-4 w-100'>
        <input 
        onChange={(e) => setKeyword(e.target.value)}
        type="text" 
        className="p-1 mr-4 bg-light" 
        placeholder="Developer, india" />
        <Button onClick={handleSubmit} style={{ backgroundColor: "blue" }}>
            Search
        </Button>
        </div>
        {loading && <div className='text-center my-8'>Loading...</div>}
        {salaryData && <Bar options={options} data={salaryData} />}
        </div>
    )

  };
  
  export default Salary;
  