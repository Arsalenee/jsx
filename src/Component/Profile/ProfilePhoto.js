import React from 'react';
import img from './arsa.jpg'


const ProfilePhoto = () => {
  return (
    <img className='photo' src={img} alt="Profile Photo" />
  );
}

export default ProfilePhoto;