import type { NextPage } from 'next'

const pictures = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
  { id: '11' },
  { id: '12' },
]

const TheCollection = () => (
  <div className='flex flex-col items-center justify-center'>
    <h2 className='text-white text-5xl lg:text-7xl font-bold text-center' style={{ textShadow: '0 0 10px black' }}>THE COLLECTION</h2>

    <div className='mt-48 w-full max-w-screen-xl'>
      <ul className='px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-4 lg:gap-8 items-center'>
        {pictures.map(picture => (
        <li key={picture.id} className='bg-gray-400 w-full h-96 rounded'>
        </li>
        ))}
      </ul>
    </div>
  </div>
)

const TheLore = () => (
  <div>
    <div className='flex flex-col md:flex-row'>
      <div className='bg-gray-800 w-full'>
        {/* IMAGE */}
      </div>
      <div className='w-full text-gray-200 bg-red-900'>
        <div className='py-24 lg:py-48 px-4 sm:px-12 lg:px-24'>
          <h3 className='text-5xl font-semibold text-center'>LORE</h3>
          <p className='text-lg sm:text-xl mt-12 leading-loose sm:leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row'>
      <div className='w-full text-gray-200 bg-red-900'>
        <div className='py-24 lg:py-48 px-4 sm:px-12 lg:px-24'>
          <h3 className='text-5xl font-semibold text-center'>LORE</h3>
          <p className='text-lg sm:text-xl mt-12 leading-loose sm:leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <div className='bg-gray-800 w-full'>
        {/* IMAGE */}
      </div>
    </div>
  </div>
)

const Footer = () => (
  <div className='flex flex-col sm:flex-row items-center sm:justify-center'>
    <div className='w-24 h-24 rounded-full bg-gray-400 sm:mx-12 mt-12 sm:mt-0'></div>
    <div className='w-24 h-24 rounded-full bg-gray-400 sm:mx-12 mt-12 sm:mt-0'></div>
    <div className='w-24 h-24 rounded-full bg-gray-400 sm:mx-12 mt-12 sm:mt-0'></div>
  </div>
)

const Home: NextPage = () => {
  return (
    <div>
      <div className='relative bg-gray-900 min-h-screen'>
        <img className='fixed h-screen w-screen top-0' src='background01.png' alt='' />
        <img className='absolute w-1/12' style={{ left: '2.5%' }} src='banner.png' alt='' />
        <img className='w-full md:w-3/4 py-48 mx-auto relative z-10' src='Logo.png' alt='Legends of the arena' />
        <img className='absolute bottom-0 w-full mx-auto' src='bottom_weapons.png' alt='' />
      </div>

      <div className='bg-white relative z-10'>
        <TheLore />
      </div>

      <div className='py-24 sm:py-48 relative z-10'>
        <TheCollection />
      </div>

      <div className='py-24 sm:py-48 bg-gray-900 relative z-10'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
