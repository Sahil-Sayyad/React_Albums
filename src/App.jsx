import { useState, useEffect } from 'react'
import axios from "axios";

function App() {

  const [albums, setAlbums] = useState()
  const [loading, setLoading] = useState(false);

  // fetchAlbums function fetches and shows albums from api.
  const fetchAlbums = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos");
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);


  return (
    <>
      {/* NavBar Section */}
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 font-medium font-mono">

        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">

          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React Album</span>
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add Album
            </button>

          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/** Main Display Albums Section*/}
      <div className='containter mx-auto px-4 mt-20'>

        {loading ? (
          <h6 className="text-white">loading....</h6>
        ) : albums && (
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {albums.map((album) => (
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-20 font-mono">
                <div key={album.id} className="flex flex-col items-center justify-center pb-10 mt-5">
                  {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="src/assets/profile.png" alt="profile image" /> */}
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={album.url} alt="profile image" />

                  <h5 className=" text-center mb-1 text-xl font-medium text-gray-900 dark:text-white">{album.title}</h5>
                  <span className="text-center text-sm text-gray-500 dark:text-gray-400">Visual Designer - Demo</span>
                  <div className="flex mt-4 md:mt-6 justify-center">
                    <button className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-[5px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Update</button>
                    <button className='py-2 px-4 ms-2 text-sm font-medium  text-white bg-blue-700 rounded-[5px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default App
