import React from 'react'
import './form.css'

export default function Form({ onInputChange, onButtonSubmit }) {
    return (
        <div>
            <p className='f5'>
              {'Input URL of picture'}
            </p>
            <div className="center">
              <div className='center pa1 br2'>
                <input className='f4 pa2 w-70 center' type="text" onChange = {onInputChange}/>
                  <button className='w-30 grow f4 link ph3 pv2 dib white bg-green' onClick={onButtonSubmit}>Search</button>
              </div>


            </div>
        </div>
    )
}
