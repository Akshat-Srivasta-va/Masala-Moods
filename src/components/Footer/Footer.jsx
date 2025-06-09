import React from "react";
import Logo from "../../assets/food/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FED16A]">
      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-12">
          {/* brand info */}
          <div className="space-y-6 lg:max-w-[300px] ml-10">
            <img src={Logo} alt="" className="w-45" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              assumenda cupiditate aliquam inventore labore molestias optio
              temporibus! Necessitatibus itaque molestias quas sapiente, dolore
              consectetur quod ratione nam expedita suscipit vero!
            </p>
            <a href="#" className="inline-block mt-6 text-sm">
              Contact@food.com
            </a>
          </div>
          {/* Quick Links */}
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Contact</li>
                <li className="footer-link">Food</li>
              </ul>
            </div>

              <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Contact</li>
                <li className="footer-link">Food</li>
              </ul>
            </div>

              <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Contact</li>
                <li className="footer-link">Food</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
