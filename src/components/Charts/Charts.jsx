
import React, {useState , useEffect} from 'react';
import {fetchDailyData} from "../../api/index";
import {Line, Bar} from "react-chartjs-2";

import styles from './Charts.module.css';
const Charts =  ({data : {confirmed , recovered, deaths } , country}) => {
    const [dailydata , setDailyState] = useState([]);

    useEffect(() => {
        const fetchData =  async () => {
            setDailyState(await fetchDailyData());
        }
        fetchData();
    
    }, []);
       
    const lineChart = (
        dailydata.length
        ?(<Line 
        data = {{
            labels : dailydata.map(({date}) => date),
            datasets : [
                {
                    data: dailydata.map(({confirmed}) => confirmed),
                    label : "Infected",
                    borderColor : 'blue',
                    fill : true,
                },{
                    data: dailydata.map(({deaths}) => deaths),
                    label : "Deaths" ,
                    borderColor : 'red',   
                    backgroundColor : 'rgba(255, 0 ,0 , 0.5)',  
                    fill : true,
                }
            ],

        }}
        /> ): null

    );

    const Barchart = (
        confirmed
        ?(
            <Bar 
              data = {{
                  labels : ["Infected" , "Recovered" , "Deaths"],
                  datasets : [{
                      label : "People",
                      backgroundColor : [
                          'rgba(0 , 0 ,255, 0.5)',
                          'rgba(0 ,255, 0, 0.5)',
                          'rgba(255,0 ,0, 0.5)'
                      ],
                    data : [confirmed.value ,recovered.value ,deaths.value],  
                  }],
              }}
              options = {{
                  legend : {display : false},
                  title : {display : true , text : "Current state in " + country},
              }}

      />): null

    );

    return (
       <div className = {styles.container}>
           {country ? Barchart : lineChart}
       </div>

    )
}

export default  Charts;