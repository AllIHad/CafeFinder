import _cafes from './cafe.js';

class DataSource {
  static searchCafe(keyword) { 
    return fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.data) {
          return Promise.resolve(responseJson.data);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
