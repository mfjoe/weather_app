import React, {useState} from 'react'
import axios from 'axios'

function App() {

const url = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=154446bad498cca938e294ba7c848028'


  return (
    <div className="app">
        <div className='container'>
          <div className='top'>
            <div className='location'>
              <p>London</p>
            </div>
            <div className='temp'>
              <h1>65</h1>
            </div>
            <div className='description'>
              <p>Clouds</p>
            </div>
          </div>

          <div className='bottom'>
            <div className='feels'>
              <p>75</p>
            </div>
            <div className='humidity'>
              <p>40%</p>
            </div>
            <div className='wind'>
              <p>2mph</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
