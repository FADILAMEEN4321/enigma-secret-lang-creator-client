import './app.css';


function App() {
  return (
    <>
   <div class="absolute top-0 z-[-2] h-full w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      
      <div className="p-4">
    {/* Navbar Container */}
    <div className="container p-2 mx-auto flex justify-between items-center">

        {/* Logo/Brand */}
        <div className="text-white font-bold text-3xl md:text-4xl">
            Enigma
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <div className="text-white space-x-4 md:flex hidden">
            <a href="#" className="hover:text-gray-300 p-2">
                Home
            </a>
            <a href="#" className="hover:text-gray-300 p-2">
                encoder-decoder
            </a>
            <a href="#" className="hover:text-gray-300 p-2 rounded-md">
                Buy me a coffee
            </a>
        </div>

        {/* Login and Signup Buttons */}
        <div className="space-x-4">

            {/* Login Button */}
            <button
                type="button"
                className="text-enigmagray bg-gradient-to-r from-enigmalightgreen to-enigmagreen hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-enigmalightgreen dark:focus:ring-enigmagreen shadow-lg shadow-enigmagreen-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-lg text-sm font-semibold px-4 py-1 md:px-5 md:py-2 text-center"
            >
                Login
            </button>

            {/* Signup Button */}
            <button
                type="button"
                className="text-enigmagray bg-white focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white-500/50 dark:shadow-lg dark:shadow-white-800/80 font-medium rounded-lg text-sm px-4 py-1 md:px-5 md:py-2 text-center"
            >
                Signup
            </button>

          

        </div>
    </div>
</div>




<div className="container mx-auto p-5">


<div className="flex items-center mb-4">
<h2 className="text-enigmawhite text-2xl font-bold">Secure Your Way of Messaging</h2>
<img className="ml-3" src="lock-key.png" alt="Lock-key" width="30" height="30" />

</div>

<div className="flex-row md:flex gap-3">

  <div className="rounded-lg w-full md:w-3/4 grid grid-cols-1 gap-3">
    

    <div className="bg-enigmagray  h-64 rounded-lg p-2">
    <textarea
            className="scrollable-content w-full h-48 bg-transparent text-enigmalightgray p-2 rounded-md focus:outline-none focus:border-enigmalightgreen resize-none overflow-auto"
            placeholder="Type your text here..."
        ></textarea>

        <div>

        </div>


    </div>
    <div className="bg-enigmagray h-52 rounded-lg"></div>
    

  </div>

  <div className="w-full md:w-1/4 rounded-lg grid grid-cols-1 gap-3">
  <div className="bg-enigmagray  h-[349px] rounded-lg p-2">
    <div className="rounded-md h-60 flex flex-col items-center justify-center">

      
      <h3 className="text-center text-enigmalightgray">Generate Your Secured and Encoded Language Here.</h3>

<img className="mt-3" src="secure-icon.png" alt="secure-icon" />
  

    </div>

    <input type="text" placeholder="Name of your language.." className="w-full text-enigmagray h-8 bg-enigmalightgray mt-2 rounded-md" />

    <button type="button" class=" mt-2 text-gray-900 font-semibold w-full text-center bg-enigmawhite hover:bg-slate-200 rounded-md p-2 me-2 mb-2">
Generate Language
</button>
  </div>
  <div className="bg-enigmagreen h-28 rounded-lg"></div>

  </div>

</div>





</div>



    </>
  );
}

export default App;
