import React from 'react'
// import './from.css'

export default function Form({ onInputChange, onButtonSubmit }) {
    return (
        <div>
            <p className='f3'>
              {'Input your favourite football team!'}
            </p>
            <div className="center">
              <div className='center pa4 br4'>
                <input className='f4 pa2 w-70 center' type="text" onChange = {onInputChange}/>
                  <button className='w-30 grow f4 link ph3 pv2 dib white bg-green' onClick={onButtonSubmit}>Search</button>
              </div>


            </div>
        </div>
    )
}
