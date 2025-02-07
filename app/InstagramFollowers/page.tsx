"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define types for the data structures
interface FollowerPackage {
  id: number;
  name: string;
  followers: number;
  price: number;
  description: string;
}

interface AccountSale {
  id: number;
  username: string;
  followers: number;
  price: number;
  niche: string;
  image?: string; // Optional image for account
}

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  avatar?: string; // Optional avatar for reviewer
}

const InstagramFollowers: React.FC = () => {
  // State with types
  const [followerPackages, setFollowerPackages] = useState<FollowerPackage[]>([]);
  const [accountSales, setAccountSales] = useState<AccountSale[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [paymentAmount, setPaymentAmount] = useState<string>("");

  useEffect(() => {
    const initialFollowerPackages: FollowerPackage[] = [
      { id: 1, name: 'Starter', followers: 500, price: 10, description: 'Get started with a small boost.' },
      { id: 2, name: 'Premium', followers: 2000, price: 30, description: 'Improve your visibility significantly.' },
      { id: 3, name: 'Ultimate', followers: 5000, price: 70, description: 'Maximize your reach and influence.' },
    ];

    const initialAccountSales: AccountSale[] = [
      { id: 1, username: 'travel_dude', followers: 10000, price: 100, niche: 'Travel', image: '/images/account-travel.jpg' },
      { id: 2, username: 'foodie_lover', followers: 5000, price: 60, niche: 'Food', image: '/images/account-food.jpg' },
      { id: 3, username: 'tech_guru', followers: 8000, price: 80, niche: 'Technology', image: '/images/account-tech.jpg' },
    ];

    const initialReviews: Review[] = [
      { id: 1, author: 'Alice', rating: 5, comment: 'Fantastic service! My follower count exploded!', avatar: '/images/avatar-alice.jpg' },
      { id: 2, author: 'Bob', rating: 4, comment: 'Solid value for the price, saw good results.', avatar: '/images/avatar-bob.jpg' },
      { id: 3, author: 'Charlie', rating: 5, comment: 'Highly recommend this service, very professional.', avatar: '/images/avatar-charlie.jpg' },
    ];

    setFollowerPackages(initialFollowerPackages);
    setAccountSales(initialAccountSales);
    setReviews(initialReviews);
  }, []);

  const handleEasyPaisaPayment = (amount: number) => {
    alert(`Simulating EasyPaisa payment of ${amount} PKR. Integrate with EasyPaisa API.`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentAmount(e.target.value);
  };

  const handleOneTimePayment = () => {
    if (paymentAmount && !isNaN(Number(paymentAmount))) {
      handleEasyPaisaPayment(Number(paymentAmount));
    } else {
      alert('Please enter a valid amount.');
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Grow Your Instagram Influence
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Supercharge your social media presence with authentic followers and
            valuable accounts.
          </p>
        </div>

        {/* --- Buy Followers Section --- */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Boost Your Followers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {followerPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="px-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name} Package
                  </h3>
                  <p className="text-gray-700 text-base">
                    {pkg.description}
                  </p>
                </div>
                <div className="bg-gray-100 px-6 py-4 border-t border-gray-200">
                  <p className="text-lg font-semibold text-gray-900">
                    {pkg.followers} Followers
                  </p>
                  <p className="text-xl text-green-600 font-bold mt-2">
                    PKR {pkg.price}
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleEasyPaisaPayment(pkg.price)}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Buy Instagram Accounts Section --- */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Premium Instagram Accounts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountSales.map((account) => (
              <div
                key={account.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={account.image || "/images/placeholder-account.jpg"} // Fallback image
                    alt={`Instagram account: @${account.username}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div> {/* Subtle overlay */}
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    @{account.username}
                  </h3>
                  <p className="text-gray-600">Niche: {account.niche}</p>
                </div>
                <div className="bg-gray-100 px-6 py-4 border-t border-gray-200">
                  <p className="text-lg font-semibold text-gray-900">
                    {account.followers} Followers
                  </p>
                  <p className="text-xl text-green-600 font-bold mt-2">
                    PKR {account.price}
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleEasyPaisaPayment(account.price)}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Purchase Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Client Reviews Section --- */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
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
              </div>
            ))}
          </div>
        </section>

        {/* --- One-Time Payment Section --- */}
        <section className="mt-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Make a Payment
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Enter the amount you wish to pay securely:
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
            <button
              onClick={handleOneTimePayment}
              className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Pay with EasyPaisa
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InstagramFollowers;