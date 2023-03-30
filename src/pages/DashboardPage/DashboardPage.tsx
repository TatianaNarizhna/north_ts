import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Section from '../../modules/Section/Section';
import s from './DashboardPage.module.css';
import {SqlQuery} from '../../types/itemTypes';

interface IProps {
    dash: SqlQuery[][];
};

type Acc = {
    resultsCount: number, 
    select: number,
    selectWhere: number,
    selectLeftJoin: number
}

// q66efvhmdo52s5lr

const DashboardPage: React.FC<IProps> = ({ dash }: IProps) => {
   const [lastLog, setLastLog] = useState<SqlQuery[][]>([]);
   const [metrics, setMetrics] = useState<Acc>({
    resultsCount: 0, 
    select: 0,
    selectWhere: 0,
    selectLeftJoin: 0
});
   const [country, setCountry] = useState('');
   const [ap, setAp] = useState('');


useEffect(() => {
   const fetchGeo = async () => {
    const { data} = await axios.get('https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_fHHzq16vcnrB02eEuUi3CGTFwBxE9');
    // console.log(data);
    const res = await axios.get(`https://airlabs.co/api/v9/nearby?lat=${data.location.lat}&lng=${data.location.lng}&distance=1000&api_key=39c7b782-e507-473a-af2f-0aba7de6c3a1`);
    // console.log(res.data.response.airports);
   
    setAp(res.data.response.airports[0].iata_code)
    setCountry(data.location.country)
   }
   fetchGeo()
  }, []);




    let arr: SqlQuery[] = [];

    useEffect(() => {
        let firstFiveArray= dash.slice(0,6);
        setLastLog(firstFiveArray)
    }, [dash]);

    lastLog.flat().forEach((el) => {
        arr.push(el)
    })

    useEffect(() => {
        const sqlMetricsObj =  logMetrics(arr);
        setMetrics(sqlMetricsObj)
    }, [lastLog])
    
    const logMetrics = (array: SqlQuery[]) => {
        return array.reduce((acc: Acc, obj: SqlQuery) => {
           acc.resultsCount += obj.resultsCount;
           acc.select += obj.sqlType === "select" ? 1 : 0;
           acc.selectWhere += obj.sqlType === "select where" ? 1 : 0;
           acc.selectLeftJoin += obj.sqlType === "select where left join" ? 1 : 0;
        return acc;
        }, {resultsCount: 0, select: 0, selectWhere: 0, selectLeftJoin: 0}); 
    }

    return (
        <Section >
          <div className={s.card_content}>
            <div className={s.grid}>
                <div>
                    <p className={s.worker}>Worker</p>
                    <p className={s.text}>Colo: {ap}</p>
                    <p className={s.text}>Country: {country} </p>
                </div>

                <div>
                    <p className={s.sql}>SQL Metrics</p>
                    <p className={s.text}>Query count: {arr.length}</p>
                                
                    <p className={s.text}>Results count: {metrics && metrics.resultsCount}</p>
                    <p className={s.text}># SELECT: {metrics && metrics.select}</p>
                    <p className={s.text}># SELECT WHERE: {metrics && metrics.selectWhere}</p>
                    <p className={s.text}># SELECT LEFT JOIN: {metrics && metrics.selectLeftJoin}</p>
                </div>

            </div>
            <p className={s.title}>Activity log</p>
            <p className={s.sub_title}>Explore the app and see metrics here</p>
            {arr.map(({timeStart, timeTaken, sql, resultsCount }, i) => (
                <div key={i} className={s.log_block}>
                    <p className={s.text_gray}>{timeStart},{timeTaken}ms</p>
                    <p className={s.text_black}>{sql}</p>
                </div>
            ))}
          </div>
        </Section>
    )
}


export default DashboardPage



