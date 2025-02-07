import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 md:py-3 px-4 md:px-6 bg-white ml-20 mr-20">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 max-w-lg pr-0 md:pr-12 mb-8 md:mb-0"> {/* Responsive padding and margin */}
        <h2 className="text-xl font-semibold text-blue-600">A Trusted Digital Agency</h2> {/* Subtitle */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"> {/* Larger font size on larger screens */}
          We're A Creative Digital Agency.
        </h1>
        <p className="text-lg text-gray-600">
          We specialize in crafting beautiful, user-centered digital experiences that drive results. Let us help you elevate your brand.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"> {/* Stack buttons on small screens */}
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out w-full sm:w-auto"> {/* Full width on small screens */}
            Get Started
          </button>
           <button className="px-6 py-3 flex items-center justify-center bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out w-full sm:w-auto">
            {/* How It Works Button with Play Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 mr-2"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
            How It Works
          </button>
        </div>
      </div>

      {/* Right Section (Illustration) */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/Two women and man in office discuss business growth charts.png" //  USE  img FOR ILLUSTRATIONS
          alt="Digital Agency team discussing business growth"
          width={700}
          height={500}
          className="w-full"  // Removed rounded and shadow, as per the original image
          priority
          placeholder="blur" // Add blur placeholder
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==" //Tiny blank image
        />
      </div>
    </section>
  );
}