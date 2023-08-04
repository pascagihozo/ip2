const API_URL_1 = 'https://stats.oecd.org/SDMX-JSON/data/AV_AN_WAGE/AUS+AUT+BEL+CAN+CHL+COL+CRI+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LVA+LTU+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+OECD.USDPPP/all?startTime=2000&endTime=2022&dimensionAtObservation=allDimensions'


export const fetchCountryData = async() => {
    try {
    const response = await fetch(API_URL_1)
    const data = response.json()
    return data;
    } catch (error) {
        console.error(error)
    }
}

export const getJobSearch = async(search, location) => {
const url = `https://indeed12.p.rapidapi.com/jobs/search?query=${search}&location=${location}`;
const options = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': '3dc11da1d9msh23d507d320e1069p122fb3jsn25c997bbd15d',
	  'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
    }
  };

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
} catch (error) {
	console.error(error);
}
}

export const getJobSalaryData = async(job, loc) => {
	const url = `https://job-salary-data.p.rapidapi.com/job-salary?job_title=${job}&location=${loc}&radius=200`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3dc11da1d9msh23d507d320e1069p122fb3jsn25c997bbd15d',
		'X-RapidAPI-Host': 'job-salary-data.p.rapidapi.com'
	  }
	};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result.data;
} catch (error) {
	console.error(error);
}
}