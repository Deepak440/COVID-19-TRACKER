import React from 'react';
import {Cards ,CountryPicker ,Charts} from './components';
import styles from './App.module.css';
import {fetchData} from './api/index';
import image from './components/images/image.png';

class App extends React.Component{

    state = {
        data : {},
        country : "",
    }
   async componentDidMount(){
        const Data = await fetchData();
        this.setState({data :Data});
    }
    handleCountryChange = async (country) => {
        const Data  = await fetchData(country);
        this.setState({data : Data , country : country});

    }
    render(){
        const {data , country} = this.state;
    return (
        <div className = {styles.container}>
             <img  className = {styles.image} src = {image} alt = "COVID-19" />
            <Cards  data = {data}/>
            <CountryPicker  handleChange = {this.handleCountryChange}/>
            <Charts data = {data} country = {country} />
           
        </div>
    );
}}
export default App;