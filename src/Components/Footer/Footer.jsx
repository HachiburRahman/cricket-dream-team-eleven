import React from 'react';
import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
    return (
        <div>
            <section className="bg-[#0b0f1a] py-20 max-w-300 mx-auto">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="relative -mt-48 bg-linear-to-r from-blue-100 via-white to-orange-100 rounded-2xl p-10 text-center shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Subscribe to our Newsletter
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Get the latest updates and news right in your inbox!
                        </p>

                        <div className="mt-6 flex justify-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                            />
                            <button className="px-6 py-2 rounded-lg bg-linear-to-r from-pink-400 to-yellow-400 font-semibold text-black">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#050914] text-gray-400 pt-20 pb-6 max-w-300 mx-auto">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Top Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                        {/* About */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">About Us</h3>
                            <p className="text-sm">
                                We are a passionate team dedicated to providing the best services to our customers.
                            </p>
                        </div>

                        {/* Logo + Links */}
                        <div className="flex flex-col items-center">
                            <img
                                src={footerLogo}
                                alt="Cricket Logo"
                                className="w-16 mb-3"
                            />
                            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                            <ul className="space-y-1 text-sm">
                                <li>Home</li>
                                <li>Services</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        {/* Subscribe */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Subscribe</h3>
                            <p className="text-sm mb-3">
                                Subscribe to our newsletter for the latest updates.
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none"
                                />
                                <button className="px-4 py-2 rounded-lg bg-linear-to-r from-pink-400 to-yellow-400 font-semibold text-black">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Bottom */}
                    <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
                        ©2025 Your Company All Rights Reserved.
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;