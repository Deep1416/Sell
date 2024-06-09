import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="mb-4 font-bold flex items-center">
        <img src="#" alt="Acme Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-3xl">Acme</h1>
      </div>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit,
        tristique.
      </p>
      <div className="flex gap-8 mb-12 text-xl">
        <TiSocialFacebook />
        <IoLogoInstagram />

        <FaXTwitter />
        <FaGithub />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <ul className="list-disc pl-5">
            <li>Branding</li>
            <li>Data Analysis</li>
            <li>E-commerce Solutions</li>
            <li>Market Research</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Support</h2>
          <ul className="list-disc pl-5">
            <li>Pricing Plans</li>
            <li>User Guides</li>
            <li>Tutorials</li>
            <li>Service Status</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2">About Us</h2>
          <ul className="list-disc pl-5">
            <li>Our Story</li>
            <li>Latest News</li>
            <li>Career Opportunities</li>
            <li>Media Enquiries</li>
            <li>Collaborations</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Legal</h2>
          <ul className="list-disc pl-5">
            <li>Claim</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>User Agreement</li>
          </ul>
        </div>
      </div>
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center px-5 border border-gray-400 rounded-lg py-4 bg-slate-400 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2 text-white">
            Subscribe to our newsletter
          </h2>
          <p className="mb-2 text-gray-200">
            Receive weekly updates with the newest insights, trends, and tools,
            straight to your email.
          </p>
        </div>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Deep@email.com"
            className="border border-gray-400 px-4 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-700 h-10 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        © 2024 Acme Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
