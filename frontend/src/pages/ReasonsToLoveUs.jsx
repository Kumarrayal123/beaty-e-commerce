


// const ReasonsToLoveUs = () => {
//   const testimonials = [
//     {
//       stars: 4,
//       text: "I recently treated my sister to a saree from I Love Sarees, and the quality was truly remarkable, and my sister just loved it! Not just that, but it arrived in stunning packaging - perfect for gifting.",
//       author: "Blacklight Studios",
//       location: "India",
//     },
//     {
//       stars: 5,
//       text: "The saree is absolutely stunning. The fabric is great. It looks exactly like the pictures. I wore it on Mother's Day. It felt really special! The packaging was really good too. Came well packed in a box and covered with a cotton case. It would be a cherry on the cake if the sarees come with the option of adding fall. All the best I Love Sarees. Keep up the good work.",
//       author: "Devanshi Sharma",
//       location: "India",
//     },
//     {
//       stars: 5,
//       text: "The quality is beyond exceptional—every item in the collection exudes worth and perfection. It’s rare to find something that meets such high standards, and I’m genuinely left speechless by the craftsmanship and attention to detail!",
//       author: "Nikitha Shivakumar",
//       location: "India",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 py-12 px-4 mt-16">
//       <h2 className="text-2xl font-bold text-center mb-8">HEARD IT FROM YOU</h2>
//       <div className="flex flex-col md:flex-row justify-center items-center gap-6">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className={`flex-1 max-w-md text-center ${
//               index < testimonials.length - 1 ? "md:border-r md:border-gray-300" : ""
//             } px-6`}
//           >
//             <div className="flex justify-center text-yellow-500 text-lg mb-4">
//               {'★'.repeat(testimonial.stars)}
//               {'☆'.repeat(5 - testimonial.stars)}
//             </div>
//             <p className="text-gray-700 mb-6">{testimonial.text}</p>
//             <p className="text-gray-900 font-semibold">
//               {testimonial.author} • <span className="text-gray-500">{testimonial.location}</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReasonsToLoveUs;


import React from "react";
import Love1 from '../assets/frontend_assets/Love1.webp';
import Love2 from '../assets/frontend_assets/Love2.webp';
import Love3 from '../assets/frontend_assets/Love3.webp';
import Love4 from '../assets/frontend_assets/Love4.webp';
import Love5 from '../assets/frontend_assets/Love5.webp';
import Love6 from '../assets/frontend_assets/Love6.webp';
import Title from '../components/Title';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/frontend_assets/p_img1.webp'
import image2 from '../assets/frontend_assets/p_img2.webp'
import image3 from '../assets/frontend_assets/p_img4.webp'
import image4 from '../assets/frontend_assets/p_img5.webp'
import image5 from '../assets/frontend_assets/p_img6.webp'

const ReasonsToLoveUs = () => {
  const reasons = [
    { icon: Love1, title: "Effortless Everyday" },
    { icon: Love2, title: "SUSTAINABILITY" },
    { icon: Love3, title: "Fabric Quality" },
    { icon: Love4, title: "Supporting Livelihoods" },
    { icon: Love5, title: "Timeless Classics" },
    { icon: Love6, title: "Simple is Authentic" },
  ];
  // const images = [image1,image2,image3.png]; // Update with your image paths
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 1280 },
  //     items: 1,
  //   },
  //   desktop: {
  //     breakpoint: { max: 1280, min: 1024 },
  //     items: 1,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 768 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 768, min: 0 },
  //     items: 1,
  //   },
  // };
  


  const testimonials = [
    {
      stars: 4,
      text: "I recently treated my sister to a saree from I Love Sarees, and the quality was truly remarkable, and my sister just loved it! Not just that, but it arrived in stunning packaging - perfect for gifting.",
      author: "Blacklight Studios",
      location: "India",
    },
    {
      stars: 5,
      text: "The saree is absolutely stunning. The fabric is great. It looks exactly like the pictures. I wore it on Mother's Day. It felt really special! The packaging was really good too. Came well packed in a box and covered with a cotton case. It would be a cherry on the cake if the sarees come with the option of adding fall. All the best I Love Sarees. Keep up the good work.",
      author: "Devanshi Sharma",
      location: "India",
    },
    {
      stars: 5,
      text: "The quality is beyond exceptional—every item in the collection exudes worth and perfection. It’s rare to find something that meets such high standards, and I’m genuinely left speechless by the craftsmanship and attention to detail!",
      author: "Nikitha Shivakumar",
      location: "India",
    },
  ];

  return (
    <div className="flex flex-col items-center p-5 bg-white font-sans px-10">
      <h2 className="text-3xl font-semibold text-center text-black mb-8">
        <Title text2="REASONS TO LOVE US" />
      </h2>

      {/* Reasons Section */}
      <div className="flex flex-wrap justify-center gap-12 mb-12">
  {reasons.map((reason, index) => (
    <div
      key={index}
      className="flex flex-col items-center w-20 bg-transparent transition-transform transform hover:scale-105 duration-300 ease-in-out"
    >
      <img
        src={reason.icon}
        alt={reason.title}
        className="w-20 h-20 mb-4 transition-all duration-300" // Increased bottom margin for spacing
      />
      <p className="text-lg font-medium text-center text-gray-800">
        {reason.title}
      </p>
    </div>
  ))}
</div>

 


      {/* Brand Story Button */}
      <button className="mt-8 px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition-all duration-300">
        Our Brand Story
      </button>

      <div className="border border-gray-400">
    
      {/* <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      showIndicators={false}
      centerMode={true}
      centerSlidePercentage={25} // Show 3 images at a time
      dynamicHeight={true}
      emulateTouch={true} // Enables swipe on touch devices
      swipeable={true}
      showArrows={true} // Show navigation arrows
    >
      <div >
        <img
          className="object-contain"
          src={image1}
          alt="Hero Image"
          style={{ width: '100%', height: '400px' }}
        />
      </div>
      <div>
        <img
          className="object-contain"
          src={image2}
          alt="Hero Image 1"
          style={{ width: '100%', height: '400px' }}
        />
      </div>
      <div>
        <img
          className="object-contain"
          src={image3}
          alt="Hero Image 2"
          style={{ width: '100%', height: '400px' }}
        />
      </div>
      <div>
        <img
          className="object-contain"
          src={image4}
          alt="Hero Image 2"
          style={{ width: '100%', height: '400px' }}
        />
      </div>
      <div>
        <img
          className="object-contain"
          src={image5}
          alt="Hero Image 2"
          style={{ width: '100%', height: '400px'}}
        />
      </div>
      
    </Carousel> */}
    <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={1000}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={25} // Show 3 images at a time
        dynamicHeight={true}
        emulateTouch={true} // Enables swipe on touch devices
        swipeable={true}
        showArrows={true} // Show navigation arrows
      >
        <div>
          <img
            className="object-contain"
            src={image1}
            alt="Hero Image"
            style={{ width: '100%', height: '400px' }}
          />
        </div>
        <div>
          <img
            className="object-contain"
            src={image2}
            alt="Hero Image 1"
            style={{ width: '100%', height: '400px' }}
          />
        </div>
        <div>
          <img
            className="object-contain"
            src={image3}
            alt="Hero Image 2"
            style={{ width: '100%', height: '400px' }}
          />
        </div>
        <div>
          <img
            className="object-contain"
            src={image4}
            alt="Hero Image 2"
            style={{ width: '100%', height: '400px' }}
          />
        </div>
        <div>
          <img
            className="object-contain"
            src={image5}
            alt="Hero Image 2"
            style={{ width: '100%', height: '400px' }}
          />
        </div>
      </Carousel>

    </div>


      {/* Updated Testimonials Section */}
      <div className="bg-gray-50 py-12 px-4 mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">HEARD IT FROM YOU</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-1 max-w-md text-center ${
                index < testimonials.length - 1 ? "md:border-r md:border-gray-300" : ""
              } px-6`}
            >
              {/* Star Rating */}
              <div className="flex justify-center text-yellow-500 text-lg mb-4">
                {'★'.repeat(testimonial.stars)}
                {'☆'.repeat(5 - testimonial.stars)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6">{testimonial.text}</p>

              {/* Author and Location */}
              <p className="text-gray-900 font-semibold">
                {testimonial.author} • <span className="text-gray-500">{testimonial.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasonsToLoveUs;

