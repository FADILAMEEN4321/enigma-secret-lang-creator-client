import "./app.css";
import { title } from "./constants/enigmaMachine";
import lockPng from "./assets/lock-key.png";
import securePng from "./assets/secure-icon.png";
import buyMeCoffeePng from "./assets/buymecoffee-icon.png";

function App() {
  return (
    <>
      <div class="relative z-10 h-full md:h-screen lg:h-full w-full bg-enigmanormalbg">
        <div class="absolute -z-20 h-full w-full bottom-0left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

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
                Enigma-machine
              </a>

              <div className="flex items-center hover:cursor-pointer rounded-md p-2">
                <img
                  src={buyMeCoffeePng}
                  height={120}
                  width={120}
                  alt="buymecoffee-icon"
                />
              </div>
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

        <div className="container mx-auto p-6 mt-3">
          <div className="p-3">
            <div className="flex items-center mb-7">
              <h2 className="text-enigmawhite text-2xl md:text-3xl font-bold">
                {title}
              </h2>
              <img
                className="ml-3"
                src={lockPng}
                alt="Lock-key"
                width="45"
                height="45"
              />
            </div>

            <div className="flex-row md:flex gap-3">
              <div className="rounded-lg w-full md:w-[780px] grid grid-cols-1 gap-4">
                <div className="bg-enigmagray rounded-lg p-2">
                  <textarea
                    className="scrollable-content w-full h-48 bg-transparent text-enigmalightgray p-2 rounded-md focus:outline-none focus:border-enigmalightgreen resize-none overflow-auto"
                    placeholder="Type your text here..."
                  ></textarea>

                  <div className="flex border-t border-gray-700 md:justify-end">
                    <div className="mt-1 flex flex-col md:flex-row md:space-x-3">
                      <select className="border h-9 w-28 p-1 text-enigmagray border-enigmalightgray bg-enigmalightgray rounded-md">
                        <option value="option1">Decode</option>
                        <option value="option2">Encode</option>
                      </select>

                      <input
                        className="border h-9 w-28 p-2 border-enigmalightgray bg-enigmagray rounded-md"
                        type="text"
                        placeholder="Secret key..."
                      />

                      <button
                        type="button"
                        className="text-enigmagray bg-gradient-to-r h-8 w-28 from-enigmalightgreen to-enigmagreen hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-enigmalightgreen dark:focus:ring-enigmagreen shadow-lg shadow-enigmagreen-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-lg text-sm font-semibold px-3 py-1 md:px-5 md:py-2 text-center"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-enigmagray h-52 rounded-lg p-2">
                  <div className="scrollable-content w-full h-[153px] bg-transparent text-enigmalightgray p-2 rounded-md overflow-auto">
                    cvsdfvsf India, a land of diverse cultures, traditions, and
                    a rich history, stands as a vibrant tapestry woven with the
                    threads of unity in diversity. Geographically vast and
                    economically dynamic, India is the world's seventh-largest
                    country, home to over a billion people. In the heart of
                    South Asia, India boasts a kaleidoscope of landscapes, from
                    the towering peaks of the Himalayas to the sun-kissed
                    beaches of Goa. Its history, spanning thousands of years,
                    showcases the rise and fall of empires, the flowering of art
                    and philosophy, and the enduring spirit of resilience.
                    Ancient civilizations like the Indus Valley and the Maurya
                    and Gupta dynasties have left indelible imprints on the
                    nation's heritage. Modern India is a democratic republic
                    that celebrates the principles of justice, liberty,
                    equality, and fraternity. The country has made significant
                    strides in various fields, including technology, space
                    exploration, and economic development. Cities like Mumbai,
                    Delhi, and Bangalore are bustling hubs of innovation and
                    commerce. However, India also grapples with challenges such
                    as poverty, inequality, and environmental issues. The
                    nation's commitment to overcoming these challenges is
                    evident in its efforts towards sustainable development and
                    social reforms. What truly defines India is its people –
                    diverse, resilient, and bound by a collective spirit. The
                    harmonious coexistence of different religions, languages,
                    and traditions exemplifies the nation's motto: "Unity in
                    Diversity." India's cultural tapestry, from classical dances
                    like Bharatanatyam to festivals like Diwali, reflects the
                    country's rich and colorful heritage. In conclusion, India
                    is a multifaceted nation that encapsulates the essence of
                    tradition and progress. As it navigates the complexities of
                    the modern world, India's journey is a testament to the
                    enduring spirit of a people united by history, culture, and
                    the vision of a brighter future.
                  </div>

                  <div className="flex border-t border-gray-700 justify-end">
                    <button
                      type="button"
                      class="text-gray-900 mt-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                    >
                      Copy
                      <svg
                        className="ml-2"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[460px] rounded-lg grid grid-cols-1 gap-4 mt-4 md:mt-0">
                <div className="bg-enigmagray  h-[349px] rounded-lg p-2">
                  <div className="rounded-md h-60 flex flex-col items-center justify-center">
                    <h3 className="text-center text-enigmalightgray">
                      Generate Your Secured and Encoded Language Here.
                    </h3>

                    <img
                      className="mt-3"
                      height={110}
                      width={110}
                      src={securePng}
                      alt="secure-icon"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Name of your language.."
                    className="w-full text-enigmagray h-8 bg-enigmalightgray mt-2 rounded-md"
                  />

                  <button
                    type="button"
                    class=" mt-2 text-gray-900 font-semibold w-full text-center bg-enigmawhite hover:bg-slate-200 rounded-md p-2 me-2 mb-2"
                  >
                    Generate Language
                  </button>
                </div>
                <div className="bg-enigmagreen h-28 rounded-lg from-enigmalightgreen to-enigmagreen hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-enigmalightgreen dark:focus:ring-enigmagreen shadow-lg shadow-enigmagreen-500/50 dark:shadow-lg dark:shadow-green-800/80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
