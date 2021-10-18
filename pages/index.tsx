import type { NextPage } from 'next'
import { useState } from 'react'

const quotes = [
  'Closer now that I might slay thee!',
  'A stab to the groin I fancy!',
  'Feelest a shriveling in thy soul?',
  'Like a toad shall I reave thee!',
  'Gird thy soul straitly!',
  'I shall have thy knucklebones for dice!',
  'I glory in thy residue!',
  'A fool and his innards be soon parted.',
  'An hearty helping of death for thee!',
]

type Gladiator = {
  id: string
  name: string
  img: string
  speech: {
    top: string
    left: string
  }
  details: string
  selected: boolean
  items: Item[]
}

type Item = {
  name: string
  img: string
  details: string
}

const items: Item[] = [
  { name: 'Bone Helmet', img: 'Male_Helmet_Bones_Flipped.png', details: 'some flavor text' },
  { name: 'Dragon Hunter Armor', img: 'Dragon_Hunter_Green_Male.png', details: 'some flavor text' },
  { name: 'Poseidon\'s Trident', img: 'Male__0000s_0014_Poseidons-Trident.png', details: 'some flavor text' },
  { name: 'Blackhawk Saber', img: 'Male__0000s_0026_Blackhawk-Saber.png', details: 'some flavor text' },
  { name: 'Dwarven Axe', img: 'Male__0000s_0009_Dwarven-axe.png', details: 'some flavor text' },
  { name: 'Griffon Shield', img: 'Male__0000s_0018_Griffon-Shield.png', details: 'some flavor text' },
]

const replaceSquareBrackets = (str: string) => str.replace(/\[(.*?)\]/g, (_, x) => {
  return `<span class="italic">${x}</span>`
})
const replaceCurlyBraces = (name: string) => (str: string) => {
  return str.replace(/{(.*?)}/g, (_, x) => {
    switch (name) {
      case 'Gaia': return x.split('/')[1]
      case 'Paulla': return x.split('/')[1]
      default: return x.split('/')[0]
    }
  })
}
const replaceAngleBrackets = (str: string) => {
  return str.replace(/<(.*?)>/g, (_, x) => {
    const percent = Math.random() * 100

    return (percent < 85)
      ? x.split('/')[0]
      : x.split('/')[1]
  })
}
const parseDetails = (gladiator: Gladiator) => replaceCurlyBraces(gladiator.name)(replaceSquareBrackets(replaceAngleBrackets(gladiator.details)))

const gladiatorsList: Gladiator[] = [
  {
    id: '1',
    name: 'Dimachaerus',
    img: '/Dimachaerus.png',
    speech: { top: '3.5rem', left: '5.5rem' },
    details: 'By statute, the bearer of this shield is entitled to one (1) [round] table, an idealistic personal code, and {his/her} own personal franchise, redeemable upon death. For convenience it also comes with a burial plot at Glastonbury, or possibly not.',
    selected: false,
    items,
  },
  {
    id: '2',
    name: 'Gladiatrix',
    img: '/Gladiatrix.png',
    speech: { top: '4rem', left: '4.5rem' },
    details: 'Art a weak <fellow/damsel> of nae conviction nor honor.',
    selected: false,
    items,
  },
  {
    id: '3',
    name: 'Laquearius',
    img: '/Laquearius.png',
    speech: { top: '3.5rem', left: '5.5rem' },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    selected: false,
    items,
  },
  {
    id: '4',
    name: 'Malleus',
    img: '/Malleus.png',
    speech: { top: '3.5rem', left: '5.5rem' },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    selected: false,
    items,
  },
  {
    id: '5',
    name: 'Parmularius',
    img: '/Parmularius.png',
    speech: { top: '3.5rem', left: '5.5rem' },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    selected: false,
    items,
  },
  {
    id: '6',
    name: 'Retiarius',
    img: '/Retiarius.png',
    speech: { top: '3.5rem', left: '5.5rem' },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    selected: false,
    items,
  },
  {
    id: '7',
    name: 'Scutarius',
    img: '/Scutarius.png',
    speech: { top: '3.5rem', left: '5.5rem' },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    selected: false,
    items,
  },
  {
    id: '8',
    name: 'Velitus',
    img: '/Velitus.png',
    speech: { top: '3.5rem', left: '5.5rem' },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    selected: false,
    items,
  },
]

const animateGladiator = (gladiator: Gladiator, gladiators: Gladiator[], _target: EventTarget, setGladiators: React.Dispatch<React.SetStateAction<Gladiator[]>>) => {
  setGladiators(gladiators.map(x => {
    return {
      ...x,
      selected: (x.id === gladiator.id) ? !x.selected : false
    }
  }))
}

const TheCollection = () => {
  const [gladiators, setGladiators] = useState(gladiatorsList)

  const selectedGladiator = gladiators.find(x => x.selected)

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-white text-5xl lg:text-7xl font-bold text-center' style={{ textShadow: '0 0 10px black' }}>THE COLLECTION</h2>

      <div className='mt-24 lg:mt-48 w-full max-w-screen-xl'>
        {<ul className='px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-4 lg:gap-8 items-center'>
          {gladiators.map((gladiator, i) => (
          <li
            key={gladiator.id}
            className='bg-gray-500 w-full max-w-xs mx-auto h-96 rounded relative'
            onClick={evt => animateGladiator(gladiator, gladiators, evt.target, setGladiators)}
            style={{ backgroundImage: `url("${gladiator.img}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='p-2 text-white'>
              {quotes[i]}
            </div>

            <div
              style={{ position: 'absolute', top: gladiator.speech.top, left: gladiator.speech.left }}
              className='w-4 h-4'>
              <svg viewBox='0 0 100 100'>
                <path d='M25,0 Q50,75 100,100' fill='none' stroke='white' strokeWidth='4' />
              </svg>
            </div>

            {/* SPEECH BUBBLES */}
            {/* {gladiator.selected && ( */}
            {/* <div className='absolute -top-40 z-10 rounded bg-yellow-200 border border-solid border-black p-2 text-black text-xs tracking-widest'> */}
            {/*   {gladiator.details} */}
            {/*   <svg className='w-4 h-4 text-yellow-200 absolute inset-x-1/3 -bottom-4' viewBox='0 0 100 100'> */}
            {/*     <polygon points='0 0 100 0 50 100' fill='currentColor' /> */}
            {/*   </svg> */}
            {/* </div> */}
            {/* )} */}
            {/* {gladiator.selected && ( */}
            {/* <div className='absolute w-3/4 -left-60 z-10 rounded bg-yellow-200 border border-solid border-black p-2 text-black text-xs tracking-widest'> */}
            {/*   {gladiator.details} */}
            {/*   <svg className='w-4 h-4 text-yellow-200 absolute inset-y-1/3 -right-4' viewBox='0 0 100 100'> */}
            {/*     <polygon points='0 0 0 100 100 50' fill='currentColor' /> */}
            {/*   </svg> */}
            {/* </div> */}
            {/* )} */}
            {/* {gladiator.selected && ( */}
            {/* <div className='absolute w-3/4 -right-60 z-10 rounded bg-yellow-200 border border-solid border-black p-2 text-black text-xs tracking-widest'> */}
            {/*   {gladiator.details} */}
            {/*   <svg className='w-4 h-4 text-yellow-200 absolute inset-y-3/4 -left-4' viewBox='0 0 100 100'> */}
            {/*     <polygon points='100 0 100 100 0 50' fill='currentColor' /> */}
            {/*   </svg> */}
            {/* </div> */}
            {/* )} */}

            {/* CARD BACK */}
            {/* <div */}
            {/*   style={{ backgroundImage: 'url(cardback.jpg)' }} */}
            {/*   className='absolute inset-0 px-12 py-9 bg-gray-900 bg-contain font-semibold bg-center bg-no-repeat duration-200 transform translate-y-full group-hover:translate-y-0'> */}
            {/*   <div className='overflow-auto overscroll-none leading-none h-full w-full'> */}
            {/*     {gladiator.details} */}
            {/*   </div> */}
            {/* </div> */}
          </li>
          ))}
        </ul>}
      </div>

      {selectedGladiator && (
      <div
        onClick={evt => animateGladiator(selectedGladiator, gladiators, evt.target, setGladiators)}
        className='fixed inset-0 flex justify-center items-center'>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div
          style={{ maxHeight: '90vh' }}
          onClick={evt => evt.stopPropagation()}
          className='max-w-screen-md overflow-auto p-8 bg-gray-800 text-gray-200 rounded shadow-2xl relative z-10 mx-2'>
          <h2 className='text-center text-5xl'>{selectedGladiator.name}</h2>

          <div className='flex flex-col sm:flex-row items-center mt-4'>
            <div className='w-full sm:w-1/2'>
              <img src={selectedGladiator.img} />
            </div>
            <div className='w-full sm:w-1/2' dangerouslySetInnerHTML={{ __html: parseDetails(selectedGladiator) }}></div>
          </div>

          {selectedGladiator?.items?.map(x => (
          <>
          <hr className='border-gray-400 py-4 mt-8' />

          <div className='flex flex-col sm:flex-row items-center'>
            <div className='w-full sm:w-1/2 text-center sm:text-left'>
              {x.name}
              <img className='w-full sm:w-1/2' src={x.img} />
            </div>
            <div className='w-full sm:w-1/2'>
              {x.details}
            </div>
          </div>
          </>
          ))}
        </div>
      </div>
      )}
    </div>
  )
}

const TheLore = () => (
  <div>
    <div className='flex flex-col-reverse md:flex-row'>
      <div className='bg-gray-800 w-full flex items-center justify-center text-gray-300 py-48 md:py-0'>
        <div className='border border-solid border-gray-300 py-2 px-4'>ARTWORK HERE</div>
      </div>
      <div className='w-full text-gray-200 bg-gray-900'>
        <div className='py-24 lg:py-48 px-4 sm:px-12 lg:px-24'>
          <h3 className='text-5xl font-semibold text-center'>Tier 1:</h3>
          <h4 className='text-3xl font-medium text-center mt-12'>Dull, rusty, in disrepair, perhaps not even a weapon</h4>
          <p className='text-lg sm:text-xl mt-12 leading-loose sm:leading-loose'>
            Only the charitable would call this armor; the uncharitable would call it a violation of the public indecency laws or the litter ordinances, depending on your posture. You avoid thinking of can openers while wearing it, for safety’s sake.
          </p>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row'>
      <div className='w-full text-gray-200 bg-gray-900'>
        <div className='py-24 lg:py-48 px-4 sm:px-12 lg:px-24'>
          <h3 className='text-5xl font-semibold text-center'>Tier 2:</h3>
          <h4 className='text-3xl font-medium text-center mt-12'>Low-quality, for a conscript</h4>
          <p className='text-lg sm:text-xl mt-12 leading-loose sm:leading-loose'>
            On the Mohs scale, this unalloyed ode to metallurgy rates just below “imitation gladius”. When they assigned you to it, it came with a complimentary metal detector, compliments of the janitorial crew.
          </p>
        </div>
      </div>
      <div className='bg-gray-800 w-full flex items-center justify-center text-gray-300 py-48 md:py-0'>
        <div className='border border-solid border-gray-300 py-2 px-4'>ARTWORK HERE</div>
      </div>
    </div>

    <div className='flex flex-col-reverse md:flex-row'>
      <div className='bg-gray-800 w-full flex items-center justify-center text-gray-300 py-48 md:py-0'>
        <div className='border border-solid border-gray-300 py-2 px-4'>ARTWORK HERE</div>
      </div>
      <div className='w-full text-gray-200 bg-gray-900'>
        <div className='py-24 lg:py-48 px-4 sm:px-12 lg:px-24'>
          <h3 className='text-5xl font-semibold text-center'>Tier 3:</h3>
          <h4 className='text-3xl font-medium text-center mt-12'>Effective, for standard infantry</h4>
          <p className='text-lg sm:text-xl mt-12 leading-loose sm:leading-loose'>
            With great power comes unfeigned concern for your welfare. Inside this testament to the power of a good welding torch, neither beasts nor Huns nor the stomach flu keep you from swiftly dispatching your appointed foes, although acid rain might.
          </p>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row'>
      <div className='w-full text-gray-200 bg-gray-900'>
        <div className='py-24 lg:py-48 px-4 sm:px-12 lg:px-24'>
          <h3 className='text-5xl font-semibold text-center'>Tier 4:</h3>
          <h4 className='text-3xl font-medium text-center mt-12'>High-quality, for elite infantry</h4>
          <p className='text-lg sm:text-xl mt-12 leading-loose sm:leading-loose'>
            [This] is what you showed them to finagle your life insurance, not the tinfoil worn by you and those you slew along the way. Those folks’ policies have since bankrupted your underwriter, which on reflection someone should have seen coming.
          </p>
        </div>
      </div>
      <div className='bg-gray-800 w-full flex items-center justify-center text-gray-300 py-48 md:py-0'>
        <div className='border border-solid border-gray-300 py-2 px-4'>ARTWORK HERE</div>
      </div>
    </div>

    <div className='flex flex-col-reverse md:flex-row'>
      <div className='bg-gray-800 w-full flex items-center justify-center text-gray-300 py-48 md:py-0'>
        <div className='border border-solid border-gray-300 py-2 px-4'>ARTWORK HERE</div>
      </div>
      <div className='w-full text-gray-200 bg-gray-900'>
        <div className='py-24 lg:py-48 px-4 sm:px-12 lg:px-24'>
          <h3 className='text-5xl font-semibold text-center'>Tier 5:</h3>
          <h4 className='text-3xl font-medium text-center mt-12'>Mastercrafted, for a general or aristocrat</h4>
          <p className='text-lg sm:text-xl mt-12 leading-loose sm:leading-loose'>
            In high society, armor is chiefly a statement of pedigree. Caesar, for example, has nicer armor, but only because he was accidentally born divine, whereas you’ve begun collecting tithes from your admirers just to get some personal space.
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Footer = () => (
  <div className='flex flex-col sm:flex-row items-center sm:justify-center'>
    <a
      href='https://discordapp.com'
      target='_blank'
      rel='noreferrer'
      style={{ borderWidth: '2px' }}
      className='border-solid border-gray-300 p-4 rounded-full flex items-center justify-center sm:mx-12 mt-12 sm:mt-0'>
      <svg className='h-16 w-16 text-gray-300' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 71 55' fill='none'>
        <g clipPath='url(#clip0)'>
          <path d='M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z' fill='currentColor'/>
        </g>
        <defs>
          <clipPath id='clip0'>
            <rect width='71' height='55' fill='white'/>
          </clipPath>
        </defs>
      </svg>
    </a>
    <a
      href='https://twitter.com/ledgeofthearena'
      target='_blank'
      rel='noreferrer'
      style={{ borderWidth: '2px' }}
      className='border-solid border-gray-300 p-2 rounded-full flex items-center justify-center sm:mx-12 mt-12 sm:mt-0'>
      <svg viewBox="0 0 36 36" className="h-20 w-20 text-gray-300" fill="currentColor" stroke='currentColor' style={{ transform: 'translate(15%, 20%)' }}>
        <g>
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
        </g>
      </svg>
    </a>
    <a
      href='https://opensea.io/'
      target='_blank'
      rel='noreferrer'
      style={{ borderWidth: '2px' }}
      className='border-solid border-gray-300 p-2 rounded-full flex items-center justify-center sm:mx-12 mt-12 sm:mt-0'>
      <svg viewBox="0 0 100 100" className="h-20 w-20 text-gray-300" fill="none" stroke='none'>
        <path fill="none" d="M100 50C100 77.6127 77.6127 100 50 100C22.3873 100 0 77.6127 0 50C0 22.3873 22.3873 0 50 0C77.6185 0 100 22.3873 100 50Z"/>
        <path fill="currentColor" d="M24.6679 51.6801L24.8836 51.341L37.8906 30.9932C38.0807 30.6953 38.5276 30.7261 38.6714 31.0497C40.8444 35.9196 42.7194 41.9762 41.841 45.7468C41.466 47.2982 40.4386 49.3992 39.2827 51.341C39.1338 51.6236 38.9694 51.901 38.7947 52.1681C38.7125 52.2914 38.5738 52.3633 38.4248 52.3633H25.048C24.6884 52.3633 24.4778 51.9729 24.6679 51.6801Z"/>
        <path fill="currentColor" d="M82.6444 55.461V58.6819C82.6444 58.8668 82.5314 59.0312 82.367 59.1031C81.3602 59.5346 77.9132 61.1168 76.48 63.11C72.8224 68.2008 70.0279 75.48 63.7812 75.48H37.721C28.4847 75.48 21 67.9697 21 58.7024V58.4045C21 58.1579 21.2003 57.9576 21.4469 57.9576H35.9745C36.2621 57.9576 36.4727 58.2247 36.4471 58.5072C36.3443 59.4524 36.519 60.4182 36.9659 61.2966C37.8289 63.0484 39.6166 64.1426 41.5481 64.1426H48.74V58.5278H41.6303C41.2656 58.5278 41.0499 58.1065 41.2605 57.8086C41.3375 57.6904 41.4249 57.5672 41.5173 57.4285C42.1903 56.473 43.1509 54.9884 44.1064 53.2983C44.7588 52.1579 45.3906 50.9404 45.8992 49.7178C46.002 49.4969 46.0841 49.2708 46.1663 49.0499C46.305 48.6595 46.4489 48.2948 46.5516 47.9301C46.6544 47.6218 46.7365 47.2982 46.8187 46.9951C47.0602 45.9574 47.1629 44.8581 47.1629 43.7177C47.1629 43.2708 47.1424 42.8033 47.1013 42.3564C47.0807 41.8684 47.0191 41.3803 46.9574 40.8923C46.9163 40.4608 46.8393 40.0344 46.7571 39.5875C46.6544 38.9351 46.5105 38.2879 46.3461 37.6354L46.2896 37.3889C46.1663 36.9419 46.0636 36.5156 45.9198 36.0687C45.5139 34.6662 45.0465 33.2998 44.5533 32.0207C44.3735 31.5121 44.168 31.0241 43.9625 30.5361C43.6595 29.8015 43.3512 29.1337 43.0687 28.5018C42.9249 28.2141 42.8016 27.9521 42.6783 27.685C42.5396 27.3819 42.3958 27.0788 42.2519 26.7912C42.1492 26.5703 42.031 26.3648 41.9488 26.1593L41.0704 24.536C40.9471 24.3151 41.1526 24.0531 41.394 24.1199L46.8907 25.6096H46.9061C46.9163 25.6096 46.9215 25.6148 46.9266 25.6148L47.6509 25.8151L48.4472 26.0412L48.74 26.1233V22.8562C48.74 21.2791 50.0037 20 51.5654 20C52.3462 20 53.0551 20.3185 53.5637 20.8373C54.0722 21.3562 54.3907 22.0651 54.3907 22.8562V27.7056L54.9764 27.8699C55.0226 27.8854 55.0688 27.9059 55.1099 27.9367C55.2538 28.0446 55.4592 28.2038 55.7212 28.3991C55.9267 28.5634 56.1476 28.7638 56.4147 28.9693C56.9438 29.3956 57.5757 29.9453 58.2692 30.5772C58.4541 30.7364 58.6339 30.9008 58.7983 31.0652C59.6922 31.8974 60.6939 32.8734 61.6494 33.9522C61.9165 34.2553 62.1785 34.5635 62.4456 34.8871C62.7127 35.2159 62.9953 35.5395 63.2418 35.8632C63.5655 36.2947 63.9148 36.7416 64.2179 37.2091C64.3617 37.43 64.5261 37.656 64.6648 37.8769C65.0552 38.4676 65.3994 39.079 65.7282 39.6903C65.8669 39.9728 66.0107 40.281 66.134 40.5841C66.4987 41.4009 66.7864 42.2331 66.9713 43.0653C67.0278 43.2451 67.0689 43.4403 67.0895 43.615V43.6561C67.1511 43.9026 67.1717 44.1646 67.1922 44.4317C67.2744 45.2845 67.2333 46.1372 67.0484 46.9951C66.9713 47.3599 66.8686 47.704 66.7453 48.0688C66.622 48.4181 66.4987 48.7828 66.3395 49.127C66.0313 49.841 65.6665 50.5551 65.235 51.2229C65.0963 51.4695 64.9319 51.7315 64.7675 51.9781C64.5877 52.24 64.4028 52.4866 64.2384 52.7281C64.0124 53.0363 63.771 53.3599 63.5244 53.6476C63.3035 53.9507 63.0775 54.2538 62.8309 54.5209C62.4867 54.9267 62.1579 55.312 61.8137 55.6819C61.6083 55.9233 61.3874 56.1699 61.1613 56.3908C60.9405 56.6373 60.7144 56.8582 60.5089 57.0637C60.1648 57.4079 59.8771 57.675 59.6356 57.8959L59.0706 58.4148C58.9884 58.4867 58.8805 58.5278 58.7675 58.5278H54.3907V64.1426H59.8976C61.1305 64.1426 62.3018 63.7059 63.247 62.9045C63.5706 62.622 64.9833 61.3994 66.6528 59.5552C66.7093 59.4935 66.7813 59.4473 66.8635 59.4268L82.0742 55.0295C82.3568 54.9473 82.6444 55.163 82.6444 55.461Z"/>
      </svg>
    </a>
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
