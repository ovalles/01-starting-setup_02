import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  //**Function to handle the year pick by user
  const [year, setYear] = useState('')
  function onSelectYear(event){
    //**event is used to pick the year choosen by user */
    setYear(event.target.value)
    //console.log({year})
    //**Call the function in parent to pass up year data
    props.onReceiveFilter(year)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year {year}</label>
        <select onChange={onSelectYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;