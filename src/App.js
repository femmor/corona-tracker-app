import React, { Component } from "react";

// Components
import { Cards, Chart, CountryPicker } from "./components";

// Fetch API Data
import { fetchData } from "./api";

// Styles
import styles from "./App.module.css";

import CoronaImage from "./images/covid-19_logo.png";

class App extends Component {
  state = {
    // Initial data and country states
    data: {},
    country: "",
  };

  // Making a request to Fetch data from the API in /api
  async componentDidMount() {
    const fetchedData = await fetchData();

    // set the data fetched to the state
    this.setState({ data: fetchedData });
  }

  // Handle fetching country data from API in the countrypicker component
  handleCountryChange = async (country) => {
    // fetch Data
    const fetchedData = await fetchData(country);
    // Set State
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img
          src={CoronaImage}
          alt="Corona Virus Logo"
          className={styles.coronaImage}
        />
        <Cards data={data} />
        <CountryPicker
          data={data}
          handleCountryChange={this.handleCountryChange}
        />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
