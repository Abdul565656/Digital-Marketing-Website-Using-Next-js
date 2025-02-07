"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import framer-motion

// --- INTERFACES ---
interface YouTubeChannel {
  id: number;
  name: string;
  subscribers: number;
  niche: string;
  price: number;
  image?: string; // Optional channel image
  monetized: boolean;
}

interface YouTubeViewsPackage {
  id: number;
  views: number;
  price: number;
  description: string;
  icon?: string; //icon link
}

interface YouTubeWatchTimePackage {
  id: number;
  hours: number;
  price: number;
  description: string;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  avatar?: string; // Optional avatar for reviewer
}

const YouTubeServices: React.FC = () => {
  // --- STATE ---
  const [channels, setChannels] = useState<YouTubeChannel[]>([]);
  const [viewsPackages, setViewsPackages] = useState<YouTubeViewsPackage[]>([]);
  const [watchTimePackages, setWatchTimePackages] = useState<YouTubeWatchTimePackage[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [paymentAmount, setPaymentAmount] = useState<string>("");

  // --- DATA FETCHING (useEffect) ---
  useEffect(() => {
    // Replace with actual API calls later

    const initialChannels: YouTubeChannel[] = [
      { id: 1, name: "Tech Explained", subscribers: 50000, niche: "Technology", price: 500, monetized: true, image: "/images/channel-tech.jpg" },
      { id: 2, name: "Cooking Adventures", subscribers: 25000, niche: "Cooking", price: 300, monetized: false, image: "/images/channel-cooking.jpg" },
      { id: 3, name: "Gaming Zone", subscribers: 75000, niche: "Gaming", price: 700, monetized: true, image: "/images/channel-gaming.jpg" },
    ];

    const initialViewsPackages: YouTubeViewsPackage[] = [
      { id: 1, views: 1000, price: 10, description: "Get your video seen by more people.", icon: "/icons/eye.svg" },
      { id: 2, views: 5000, price: 40, description: "Boost your video's visibility.", icon: "/icons/eye.svg" },
      { id: 3, views: 10000, price: 75, description: "Increase your video's reach dramatically.", icon: "/icons/eye.svg" },
    ];

    const initialWatchTimePackages: YouTubeWatchTimePackage[] = [
      { id: 1, hours: 50, price: 25, description: "Boost your video's watch time." },
      { id: 2, hours: 200, price: 80, description: "Increase video watch time for monetization." },
      { id: 3, hours: 500, price: 180, description: "Reach the YouTube watch time requirements." },
    ];

    const initialReviews: Review[] = [
      { id: 1, author: "David", rating: 5, comment: "Great service! My views increased quickly.", avatar: "/images/avatar-david.jpg" },
      { id: 2, author: "Emily", rating: 4, comment: "Good watch time package, helped me reach monetization.", avatar: "/images/avatar-emily.jpg" },
      { id: 3, author: "Frank", rating: 5, comment: "Highly recommend! Excellent YouTube channels for sale.", avatar: "/images/avatar-frank.jpg" },
    ];

    setChannels(initialChannels);
    setViewsPackages(initialViewsPackages);
    setWatchTimePackages(initialWatchTimePackages);
    setReviews(initialReviews);
  }, []);

  // --- PAYMENT HANDLER ---
  const handleEasyPaisaPayment = (amount: number) => {
    alert(`Simulating EasyPaisa payment of ${amount} PKR. Integrate with EasyPaisa API.`);
  };

  // --- INPUT CHANGE HANDLER ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentAmount(e.target.value);
  };

  // --- ONE-TIME PAYMENT HANDLER ---
  const handleOneTimePayment = () => {
    if (paymentAmount && !isNaN(Number(paymentAmount))) {
      handleEasyPaisaPayment(Number(paymentAmount));
    } else {
      alert('Please enter a valid amount.');
    }
  };

  // --- RENDER ---
  return (
    <motion.div // Animate the whole page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div // Animate the header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            Supercharge Your YouTube Success
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Elevate your channel with our premium services, designed to boost
            your visibility and engagement.
          </p>
        </motion.div>

        {/* --- BUY YOUTUBE CHANNELS SECTION --- */}
        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-semibold text-gray-800 mb-6 text-center"
          >
            Explore Premium YouTube Channels
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel) => (
              <motion.div // Animate each channel card
                key={channel.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + channel.id * 0.1 }}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={channel.image || "/images/placeholder-channel.jpg"}
                    alt={`YouTube channel: ${channel.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                  />
                  <div className="absolute inset-0 bg-black opacity-10"></div> {/* More subtle overlay */}
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {channel.name}
                  </h3>
                  <p className="text-gray-600">Niche: {channel.niche}</p>
                </div>
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                  <p className="text-lg font-semibold text-gray-900">
                    {channel.subscribers.toLocaleString()} Subscribers
                  </p>
                  <p className="text-xl text-green-600 font-bold mt-2">
                    PKR {channel.price}
                  </p>
                  <p className="text-sm text-gray-500">{channel.monetized ? "Monetized" : "Not Monetized"}</p>
                  <div className="mt-4">
                    <motion.button // Animate the button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEasyPaisaPayment(channel.price)}
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Claim Channel
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- BUY YOUTUBE VIEWS SECTION --- */}
        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-semibold text-gray-800 mb-6 text-center"
          >
            Maximize Your Video Views
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {viewsPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + pkg.id * 0.1 }}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="px-6 py-4 flex items-center">
                  {/* Include ICON Here*/}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pkg.views.toLocaleString()} Views
                  </h3>

                </div>
                <div className="px-6 py-4 flex items-center">
                  {pkg.icon && (
                      <Image
                          src={pkg.icon}
                          alt="Views Icon"
                          width={30}
                          height={30}
                          className="mr-2"
                      />
                  )}
                  <p className="text-gray-700 text-base">{pkg.description}</p>
                </div>
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">

                  <p className="text-xl text-green-600 font-bold mt-2">
                    PKR {pkg.price}
                  </p>
                  <div className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEasyPaisaPayment(pkg.price)}
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Get Views Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- BUY YOUTUBE WATCH TIME SECTION --- */}
        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-semibold text-gray-800 mb-6 text-center"
          >
            Boost Your Channel with Watch Time
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watchTimePackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + pkg.id * 0.1 }}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pkg.hours} Hours Watch Time
                  </h3>
                  <p className="text-gray-700 text-base">{pkg.description}</p>
                </div>
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                  <p className="text-xl text-green-600 font-bold mt-2">
                    PKR {pkg.price}
                  </p>
                  <div className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEasyPaisaPayment(pkg.price)}
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Increase Watch Time
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CLIENT REVIEWS SECTION --- */}
        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-semibold text-gray-800 mb-6 text-center"
          >
            Customer Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + review.id * 0.1 }}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="px-6 py-4">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src={review.avatar || "/images/placeholder-avatar.jpg"}
                        alt={`${review.author}'s Avatar`}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {review.author}
                      </h4>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 1l2.939 4.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base">{review.comment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- ONE-TIME PAYMENT SECTION --- */}
        <section className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-md mx-auto"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Secure Your Payment
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Make a one-time payment through EasyPaisa:
            </p>
            <div className="mb-4">
              <label
                htmlFor="paymentAmount"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Payment Amount (PKR):
              </label>
              <input
                type="number"
                id="paymentAmount"
                placeholder="Enter amount"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={paymentAmount}
                onChange={handleInputChange}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOneTimePayment}
              className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Process Payment
            </motion.button>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default YouTubeServices;