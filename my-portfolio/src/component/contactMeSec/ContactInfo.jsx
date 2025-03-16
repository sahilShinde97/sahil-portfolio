import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text={'sahilshinde9730@gmail.com'} Image={MdOutlineEmail}/>
        <SingleInfo text={'+91 8668707139'} Image={FiPhone}/>
        <SingleInfo text={'Nashik, Sinnar'} Image={IoLocationOutline}/>

    </div>
  )
}

export default ContactInfo