import "./forecast.css"
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading} from "react-accessible-accordion";

// const Forecast=({data})=>{
//     <>
//         <label className="title">Daitly</label>
//         <Accordion allowZeroExpanded>
//             {data.list.splice(0, 7).map(item, idx)}=>(
//             <AccordionItem></AccordionItem>))
//         </Accordion>
//     </>
//     )
// }

const week_days=['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];

const Forecast =({data})=>{

    const dayInAWeek= new Date().getDate();
    const forecastDays=week_days.slice(dayInAWeek,week_days.length).concat(week_days.slice(0,dayInAWeek));

    //console.log(naistam);
    return(
        <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item,idx) =>(
                 <AccordionItem key={idx}>
                <AccordionItemHeading>

                    <AccordionItemButton>
                        <div className="daily-item">
                            <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                            <label className="day">{forecastDays[idx]}</label>
                            <label className="description">{item.weather[0].description}</label>
                            <label className="min-max">{Math.round(item.main.temp_min)}°C /{" "}{ Math.round(item.main.temp_max)}°C </label>
                        </div>

                    </AccordionItemButton>
                </AccordionItemHeading>
               

                </AccordionItem>
            ))}
               
        </Accordion>
        </>
    )
}
export default Forecast;