import React from 'react'
import './FaceRecognition.css'

export default function FaceRecognition({imageUrl,celebrityName,percentage}) {
    return (
        <div className='center'>
          <div className="absolute mt2">
            <p className='celebrityName'>Name: {celebrityName}</p>
            <p>Percentage: {Math.round(percentage)}%</p>
            <img src={imageUrl} alt="face" width="500px" hight="auto" />  
          </div>
        </div>
    )
}
