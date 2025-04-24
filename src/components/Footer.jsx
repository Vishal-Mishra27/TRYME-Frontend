
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo1} className='mb-5 w-40' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Select your favorite products, and try them before you buy!   Change your mind? No worries, return the products easily within 7 days.  Enjoy free shipping and free returns on all orders!
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 837837382738</li>
                <li>contact@trymee.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ trymee.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
