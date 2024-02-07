import React, { useState, useEffect } from "react";
import currencies from "../../data/currencies";

const ForexNews = () => {
  const apiKey = import.meta.env.VITE_NEWS_APP_API_KEY;
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const fetchForexNews = async () => {
      try {
        let apiUrl = `https://newsapi.org/v2/everything?q=forex ${selectedCurrency}`;
        if (startDate && endDate) {
          apiUrl += `&from=${startDate}&to=${endDate}`;
        }
        apiUrl += `&language=${selectedLanguage}&sortBy=publishedAt&apiKey=${apiKey}`;

        // const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setNews(data.articles);
        } else {
          console.error("Failed to fetch Forex news");
        }
      } catch (error) {
        console.error("Error fetching Forex news:", error);
      }
    };

    fetchForexNews();
  }, [selectedCurrency, startDate, endDate, selectedLanguage]);

  useEffect(() => {
    const filteredArticles = news.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNews(filteredArticles);
  }, [searchTerm, news]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="container">
      <h2 className="my-4">Forex News</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search news..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="row mb-3">
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.label}>
                {currency.value} -- {currency.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            placeholder="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            placeholder="End Date"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            {/* Add more language options as needed */}
          </select>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filteredNews.map((article, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a
                  href={article.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForexNews;
