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
	url: 'https://indeed12.p.rapidapi.com/job/b762b8d1132bd276',
	headers: {
	  'X-RapidAPI-Key': '89ee97ecbbmsh0706d84ea9467bfp12cd6ejsn57ad11fc74a7',
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