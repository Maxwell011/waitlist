import React from "react";

const images = [
  { src: "/image1.jpg", alt: "Image 1" },
  { src: "/waitlist-image2.jpg", alt: "Image 2" },
  { src: "/waitlist-image3.jpg", alt: "Image 3" },
  {
    src: "/waitlist-image4.jpg",
    alt: "Image 4",
  },
//   {
//     src: "/waitlist-image5.jpg",
//     alt: "Image 5",
//   },
];

const Images = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 p-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-full sm:w-64 md:w-72 lg:w-45 h-60 md:h-62 object-cover rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        />
      ))}
    </div>
  );
};

export default Images;
