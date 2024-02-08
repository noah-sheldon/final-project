import './Latest.css'

// Function to fetch exchange rates
function getExchangeRates(baseCurrency) {
    
    const apiKey = 'fca_live_tL8hRYWmucQJ0vkodjxyS90TOBweprVAZb51VwFB';
    const url = `https://freecurrencyapi.com/api/v2/latest?apikey=${apiKey}&base_currency=${baseCurrency}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.code === 200) {
          console.log('Exchange rates:', data.data);

        } else {
          console.error('Error fetching data:', data.message);
        }
      })
      .catch(e => {
        console.error('Error: ', e);
      });
  }
  
  getExchangeRates('USD'); 
  