import React, { useState, useEffect } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

function Historic() {
  const [currencyData, setCurrencyData] = useState(null);
  useEffect(() => {
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/EURUSD?apikey=${
      import.meta.env.VITE_FIN_APP_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyData(data); // Save the API data to state
        console.log(currencyData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  return (
    <>
      <div>
        <h2>Multiple Graphs</h2>
        <ChartComponent id="container" primaryXAxis={{ valueType: "Category" }}>
          <Inject services={[Legend, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={currencyData}
              xName="date"
              yName="open"
              name="Open"
              type="Line"
            />
            <SeriesDirective
              dataSource={currencyData}
              xName="date"
              yName="high"
              name="High"
              type="Line"
            />
            <SeriesDirective
              dataSource={currencyData}
              xName="date"
              yName="low"
              name="Low"
              type="Line"
            />
            <SeriesDirective
              dataSource={currencyData}
              xName="date"
              yName="close"
              name="Close"
              type="Line"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </>
  );
}

export default Historic;
