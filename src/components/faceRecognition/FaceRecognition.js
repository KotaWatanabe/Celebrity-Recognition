import React from 'react'
import './FaceRecognition.css'

export default function FaceRecognition({imageUrl,name,percentage}) {
    return (
        <div className='center'>
          <div className="absolute mt2">
            <p className='name'>Name: {name}</p>
            <p>Percentage: {Math.round(percentage)}%</p>
            <img src={imageUrl} alt="face" width="500px" hight="auto" />  
          </div>
        </div>
    )
}
