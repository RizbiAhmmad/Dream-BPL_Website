const Footer = () => {
    return (
        <footer className="relative bg-gray-900 text-white pt-20 pb-8 mt-20">
            
           
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full max-w-3xl bg-gradient-to-r from-cyan-100 via-white to-yellow-100 text-gray-900 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center">Subscribe to our Newsletter</h2>
                <p className="text-center mt-2 mb-4">Get the latest updates and news right in your inbox!</p>
                <div className="flex justify-center">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="p-3 border rounded-l-lg w-full max-w-xs outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <button className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:opacity-90">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:flex lg:justify-between lg:items-start mt-20">
                
               
                <div className="mb-8 lg:mb-0">
                    <h3 className="text-xl font-bold">About Us</h3>
                    <p className="mt-4 text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                
              
                <div className="mb-8 lg:mb-0">
                    <h3 className="text-xl font-bold">Quick Links</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                
              
                <div>
                    <h3 className="text-xl font-bold">Subscribe</h3>
                    <p className="mt-4 text-gray-400">Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex mt-4">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="p-3 border rounded-l-lg w-full max-w-xs outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <button className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:opacity-90">
                            Subscribe
                        </button>
                    </div>
                </div>
                
            </div>

            
            <div className="flex justify-center mt-12">
                <img src="https://i.ibb.co.com/Ln7snCj/logo-footer.png" alt="Cricket Logo" className="w-24" />
            </div>

          
            <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
                &copy;2024 Your Company All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
