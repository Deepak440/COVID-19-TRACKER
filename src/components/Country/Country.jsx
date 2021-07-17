import React, {useState , useEffect} from 'react';
import {NativeSelect , FormControl} from '@material-ui/core'
import styles from './Country.module.css';

import {fetchCountry} from '../../api/index';

const CountryPicker = ({handleChange}) =>  {
    const [fetchCountries , setFetchCountries] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            setFetchCountries(await fetchCountry());

        }
        fetchApi();
    },[setFetchCountries]);
    
    return (
           <FormControl className = {styles.formControl} >
             <NativeSelect  defaultValue = ""  onChange = {(event) => handleChange(event.target.value)}>
              <option value = "" > Global </option>
              {fetchCountries.map((country, i)=> <option key = {i} value = {country} > {country}</option> )}
             </NativeSelect>
           </FormControl>
       
       );
}
export default CountryPicker;