import '../component/cafe-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const cafeListElement = document.querySelector('cafe-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCafe(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    cafeListElement.cacledafes = results;
  };

  const fallbackResult = message => {
    cafeListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
