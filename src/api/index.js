
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    
    let dynamicUrl = url;
     if(country ){
         dynamicUrl = url + "/countries/" + country;

     }
     

    try{

    const {data }= await axios.get(dynamicUrl);
    const modifiedData = {
        confirmed : data.confirmed,
        recovered : data.recovered,
        deaths :  data.deaths,
        lastUpdata : data,
    }
    return modifiedData;
    }catch (err){

    }
}


export const fetchDailyData = async () => {
    try{
        const  {data} = await axios.get(url + "/daily") ;
        
        const modifiedData =  data.map((dailydata) => ({
            confirmed : dailydata.confirmed.total,
            deaths : dailydata.deaths.total,
            date : dailydata.reportDate
        }));

        return modifiedData;

    } catch(error) {

    }
} 

export const fetchCountry = async () => {
    try{
        const {data : {countries}} = await axios.get(url + "/countries") ;
        return countries.map(country => country.name);
        

    }
    catch(error){
        console.log(error);
    }
} 


 