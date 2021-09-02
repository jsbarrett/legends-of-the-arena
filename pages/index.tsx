import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='relative bg-gray-900 min-h-screen'>
      <img className='fixed h-screen w-screen top-0' src='background01.png' />
      <img className='absolute w-1/12' style={{ left: '2.5%' }} src='banner.png' />

      <img className='w-full md:w-3/4 py-48 mx-auto relative z-10' src='Logo.png' />

      <img className='absolute bottom-0 w-full mx-auto' src='bottom_weapons.png' />
    </div>
  )
}

export default Home
