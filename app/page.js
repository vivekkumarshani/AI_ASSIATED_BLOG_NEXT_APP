"use client"; 
import React, {useRef, useEffect } from 'react';
import Typed from "typed.js";
import { Button } from "@/components/ui/button";




const Page = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Tailwind', 'CSS', 'React', 'Next', 'Bootstrap', 'Figma', 'Javascript', 'Photoshop', 'Canva'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using 
            <span className="font-semibold bg-white-100 dark:bg-white-900 p-4"><span ref={el}></span>
    </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Pricing Plans</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Choose a plan that fits your needs.</p>
          </div>
          <div className="flex flex-wrap justify-center ">
            {/* Basic Plan */}
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Basic</h3>
                <p className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">$19<span className="text-xl">/mo</span></p>
                <ul className="text-gray-600 dark:text-gray-400 mb-6">
                  <li className="mb-2">Feature 1</li>
                  <li className="mb-2">Feature 2</li>
                  <li className="mb-2">Feature 3</li>
                  <li className="mb-2">Feature 4</li>
                  <li className="mb-2">Feature 5</li>
                </ul>
                <Button variant="outline" className="hover:bg-gray-500 hover:text-white">Button</Button>
              </div>
            </div>
            {/* Pro Plan */}
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 border-2 border-blue-500 relative">
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">Bestseller</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Pro</h3>
                <p className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">$49<span className="text-xl">/mo</span></p>
                <ul className="text-gray-600 dark:text-gray-400 mb-6">
                  <li className="mb-2">Feature 1</li>
                  <li className="mb-2">Feature 2</li>
                  <li className="mb-2">Feature 3</li>
                  <li className="mb-2">Feature 4</li>
                  <li className="mb-2">Feature 5</li>
                </ul>
                <Button variant="outline" className="hover:bg-gray-500 hover:text-white">Button</Button>
              </div>
            </div>
            {/* Enterprise Plan */}
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Enterprise</h3>
                <p className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">$99<span className="text-xl">/mo</span></p>
                <ul className="text-gray-600 dark:text-gray-400 mb-6">
                  <li className="mb-2">Feature 1</li>
                  <li className="mb-2">Feature 2</li>
                  <li className="mb-2">Feature 3</li>
                  <li className="mb-2">Feature 4</li>
                  <li className="mb-2">Feature 5</li>
                </ul>
                <Button variant="outline" className="hover:bg-gray-500 hover:text-white">Button</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Our Features</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Discover what makes us unique.</p>
          </div>
          <div className="flex flex-wrap justify-center ">
            {/* Feature 1 */}
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Feature 1</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Description of feature 1.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Feature 2</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Description of feature 2.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Feature 3</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Description of feature 3.</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Feature 4</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Description of feature 4.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section class="py-12 bg-gray-100 dark:bg-gray-900 py-12">
  <div class="container mx-auto px-6">
  <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Top Blogs</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-4">Check out our latest posts.</p>
    </div>
    <div class="flex flex-wrap -mx-4">
      {/* <!-- Blog 1 --> */}
      <div class="w-full md:w-1/3 px-4 mb-8 transform transition duration-500 hover:scale-105">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img class="w-full h-48 object-cover" src="/javacript.webp" alt="Blog 1"/>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Blog Title 1</h3>
            <p class="text-gray-700 mb-4">A brief description of Blog 1...</p>
            <Button className='m-2' variant="outline" href="/blogs-post-1">Read More</Button>
          </div>
        </div>
      </div>
      {/* <!-- Blog 2 --> */}
      <div class="w-full md:w-1/3 px-4 mb-8 transform transition duration-500 hover:scale-105">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img class="w-full h-48 object-cover" src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2"/>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Blog Title 2</h3>
            <p class="text-gray-700 mb-4">A brief description of Blog 2...</p>
            <Button className='m-2' variant="outline" href="/blogs-post-2">Read More</Button>
          </div>
        </div>
      </div>
      {/* <!-- Blog 3 --> */}
      <div class="w-full md:w-1/3 px-4 mb-8 transform transition duration-500 hover:scale-105">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img class="w-full h-48 object-cover" src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 3"/>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Blog Title 3</h3>
            <p class="text-gray-700 mb-4">A brief description of Blog 3...</p>
           <Button className='m-2' variant="outline" href="/blogs-post-3">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

export default Page;
