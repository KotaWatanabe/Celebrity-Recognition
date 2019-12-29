import React from 'react'

 const Profile = ({name,entries}) => {
    return (
        <div>
            <div className='white f3'>
            {entries > 0 ? 
                `Hi ${name}, you found ${entries} celebrity name! Keep going on!`
               :`Hi ${name}, you have naver found celebrity name!`
            }
            </div>
        </div>
    )
}

export default Profile;
