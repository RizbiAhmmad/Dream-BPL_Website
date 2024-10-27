/* eslint-disable react/prop-types */
const Header = ({ coins}) => {
    return (
        <div>
       
       {/* Navbar */}
  <nav className="bg-white shadow-md py-4 px-12 flex justify-between items-center">
    {/* Logo  */}
    <div className="flex items-center">
      <img className="h-10 w-10" src="https://i.ibb.co.com/8ctx2Hn/logo.png" alt="Logo" />
      
    </div>

    <div className="flex space-x-6 md:space-x-10 items-center">
      <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Fixture</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Teams</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Schedules</a>
      <button className="btn "><span>{coins}</span>Coin <img src="https://i.ibb.co.com/2yQXdLH/coin.png" alt="" /></button>
    </div>

  </nav>

        </div>
    );
};

export default Header;