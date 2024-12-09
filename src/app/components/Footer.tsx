import React from "react";
// import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white flex flex-col justify-between min-h-[200px]">
      {/* Top Section */}
      <div className="container mx-auto py-8 px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Column 1 */}
        <div className="font-Helvetica Neue">
          <h4 className="mb-4">Find a Store</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Become a Member
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sign Up for Email
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Send Us Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Student Discounts
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="font-Helvetica Neue">
          <h4 className="mb-4">Get Help</h4>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us on Nike.com Inquiries
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us on All Other Inquiries
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="font-Helvetica Neue">
          <h4 className="mb-4">About Nike</h4>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sustainability
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-end">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto py-6 px-6 flex justify-between items-center text-sm">
          {/* Location Section */}
          <div className="flex items-center text-white">
            <MdLocationOn size={18} className="mr-2" />
            <span>India</span>
            <span className="width-672px height-32px top-12px left-8px p-17px 381.11px 0px 0px gap-0px opacity-0px text-gray-500 text-justify left-8">
              © 2023 Nike, Inc. All Rights Reserved
            </span>
          </div>
          {/* Bottom Links */}
          <div className="flex flex-wrap space-x-4 text-gray-500 gap-3 font-Helvetica Neue justify-center">
            <a href="#" className="hover:underline">
              <span className="text-xs">Guides</span>
            </a>
            <a href="#" className="hover:underline">
              <span className="text-xs">Terms of Sale</span>
            </a>
            <a href="#" className="hover:underline">
              <span className="text-xs">Terms of Use</span>
            </a>
            <a href="#" className="hover:underline">
              <span className="text-xs">Nike Privacy Policy</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
