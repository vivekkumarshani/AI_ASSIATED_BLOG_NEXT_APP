import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray dark:bg-gray-900 text-black py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        {/* <!-- Logo and Description --> */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-3">Your Brand</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio ipsum. Suspendisse cursus malesuada facilisis.
          </p>
        </div>
  
        {/* <!-- Quick Links --> */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-200">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-200">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-200">Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-200">Contact</a>
            </li>
          </ul>
        </div>
  
        {/* <!-- Social Media & Newsletter --> */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-3">Connect With Us</h2>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">Facebook</svg>
            </a>
            <a href="#" className="hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">Instagram</svg>
            </a>
            <a href="#" className="hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">Twitter</svg>
            </a>
          </div>
  
          <h2 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <form className="flex">
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-l bg-gray-800 text-gray-400 " />
            <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-black rounded-r">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 pb-8">
        <p className="text-center text-gray-500 py-9">© 2024 Your Brand. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
