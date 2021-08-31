import { BiHome, BiBookmark, BiCompass, BiUser } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='w-full bottom-3 fixed'>
      <div className="h-16 text-white mx-4 bg-personaldarkgray flex justify-around items-center text-sm rounded-xl">
        <div className="flex flex-col items-center hover:text-personalyellow">
          <BiHome className="h-6 w-6" />
          <p>Home</p>
        </div>
        <div className="flex flex-col items-center hover:text-personalyellow">
          <BiBookmark className="h-6 w-6" />
          <p>My List</p>
        </div>
        <div className="flex flex-col items-center hover:text-personalyellow">
          <BiCompass className="h-6 w-6" />
          <p>Explore</p>
        </div>
        <div className="flex flex-col items-center hover:text-personalyellow">
          <BiUser className="h-6 w-6" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;