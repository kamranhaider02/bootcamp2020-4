import React,{useState} from 'react'

const FormSelf = () => {
    let [cities, setCities] = useState(['Karachi', 'Lahore', 'Peshawar', 'Quetta']);
    let [newCity, setnewCity] = useState('');
   
    const addCity = e => {
        e.preventDefault();
        if (newCity === '') {
          alert('Please enter city name to save')
        } else {
          setCities([...cities,newCity]);
          alert('City added to the list successfully')
        }
      
      }
      const removeCity=(ev)=>{
        ev.preventDefault();
        // const { cityArray } = this.state
        const { value } = ev.target
    
        const newCityArray = cities.filter(city => city !== value)
    
       setCities(newCityArray);
      }
      function HeadingComponent (props) {
        const { heading } = props
        return <h1>{heading}</h1>
      }
  return (
    <div>
       <HeadingComponent heading='Add City' />
        <form onSubmit={addCity}>
      <input type="text" value={newCity} onChange={(e) => setnewCity(e.target.value)} placeholder="Enter City Name..." />
          <button onClick={(e)=>{}}> Add city</button>
      </form>
      <HeadingComponent heading='Cities List' />
      { cities != '' ?     
        <ul className="citiesList">
      {
          cities.map(city=><li className="singleCity"><h3>{city} </h3> <button value={city} onClick={removeCity} className="remove">
            X
          </button></li>)
      }
</ul> : <p>No city found</p>
}
    

      
    </div>
  )
}

export default FormSelf
