import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import "../App.css"
function Calculator({day, month, year}) {
    let [currentYears, setCurrentYears] = useState("- -")
    let [currentMonths, setCurrentMonths] = useState("- -")
    let [currentDays, setCurrentDays] = useState("- -")
    
   /* This code block is responsible for calculating and updating the current age in years, months,
   and days based on the provided `day`, `month`, and `year` props. */
    useEffect(() => {
        
        let yearsInterval, monthsInterval, daysInterval
        if (day && month && year) {
            let birthday = `${year}/${month}/${day}`
            let currentAge = new Date(new Date() - new Date(birthday))
            let calculatedYears = (currentAge.getFullYear() - 1970)
            let calculatedMonths = (currentAge.getMonth() + 1)
            let calculatedDays = (currentAge.getDate())
            setCurrentYears(0)
            setCurrentMonths(0)
            setCurrentDays(0)
  
        /* The code block you provided is responsible for updating the current age in years, months,
        and days incrementally. It uses `setInterval` to repeatedly execute a function every 50
        milliseconds. */
            yearsInterval = setInterval(() => {
                setCurrentYears((prev) => {
                    if (prev >= calculatedYears) {
                        clearInterval(yearsInterval);
                        return calculatedYears
                    }
                    return prev + 1 
                });
            }, 50)

            monthsInterval = setInterval(() => {
                setCurrentMonths((prev) => {
                    if (prev >= calculatedMonths) {
                        clearInterval(monthsInterval);
                        return calculatedMonths
                    }
                    return prev + 1 
                });
            }, 50)

            daysInterval = setInterval(() => {
                setCurrentDays((prev) => {
                    if (prev >= calculatedDays) {
                        clearInterval(daysInterval);
                        return calculatedDays
                    }
                    return prev + 1 
                });
            }, 50)
        }
        return () => {
            clearInterval(yearsInterval);
            clearInterval(monthsInterval);
            clearInterval(daysInterval);
          };
        }, [day, month, year]) 
    
    return (
    <div className='age-result'>
        <p className='age-result__paragraph'>
        <span className='age-result__number'>{currentYears}</span> years 
        </p>
        <p className='age-result__paragraph'>
        <span className='age-result__number'>{currentMonths}</span> months  
        </p>
        <p className='age-result__paragraph'>
        <span className='age-result__number'>{currentDays}</span> days
        </p>
    </div>
  )
}

export default Calculator;

Calculator.propTypes = {
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
