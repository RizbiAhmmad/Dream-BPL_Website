/* eslint-disable react/no-unknown-property */
const Banner = () => {
    return (
        <div>
        
<section className="bg-[url('https://i.ibb.co.com/XVG8Cvd/bg-shadow.png')] bg-cover bg-center bg-black bg-opacity-80 text-white mx-12 rounded-lg">
  <div className=" py-16">
    <div className="container mx-auto text-center">
    <div className="flex justify-center mb-4">
            <img src="https://i.ibb.co.com/G07bNm8/banner-main.png" alt="Cricket Logo" className="h-24 w-auto"/>
        </div>

      <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mt-4 text-lg">Beyond Boundaries Beyond Limits</p>
      
      <button onclick="increaseCoins()" className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-full border-4 border-white border-collapse">
    Claim Free Credit</button>


    </div>
  </div>
</section>



        </div>
    );
};

export default Banner;