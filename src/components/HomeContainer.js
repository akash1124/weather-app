import { connect } from "react-redux";
import { fetchWeatherDetails } from '../actions/weatherAction';
import Home from "./Home";

const mapStateToProps = state => ({
    weather: state.weather.data
});

const mapDispatchToProps = dispatch => ({
    fetchWeatherDetails: (city) => dispatch(fetchWeatherDetails(city))
  });

const HomeConatiner = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeConatiner;
