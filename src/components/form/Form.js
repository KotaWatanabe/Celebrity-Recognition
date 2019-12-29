import React from 'react'
import './form.css'

export default function Form({ onInputChange, onButtonSubmit }) {
    return (
        <div>
            <p className='f4'>
              {'We will help to find the name of celebrity! Input URL of the picture'}
            </p>
            <div className="center">
              <div className='center pa1 br2'>
                <input 
                    className='f4 pa2 w-70 center' 
                    type="text" 
                    onChange = {onInputChange}
                    placeholder = 'ex: https://samples.clarifai.com/celebrity.jpeg'
                />
                  <button className='w-30 grow f4 link ph3 pv2 dib white bg-green' onClick={onButtonSubmit}>Search</button>
              </div>


            </div>
        </div>
    )
}
