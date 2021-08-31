import { BiSearch } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='h-16 mb-6 flex justify-between items-center'>
      <div className='h-10 px-4 py-1 bg-personalblack rounded-xl text-personalyellow flex items-center'>
        Welcome, User
      </div>
      <div className='h-10 px-3 py-1 bg-personalyellow rounded-xl flex items-center text-personalblack'>
        <BiSearch />
      </div>
    </div>
  )
}

export default Header;