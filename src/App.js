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
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

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
