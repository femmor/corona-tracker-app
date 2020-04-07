import React, { Component } from "react";

// Components
import { Cards, Chart, CountryPicker } from "./components";

// Fetch API Data
import { fetchData } from "./api";

// Styles
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker data={data} />
        <Chart data={data} />
      </div>
    );
  }
}

export default App;
