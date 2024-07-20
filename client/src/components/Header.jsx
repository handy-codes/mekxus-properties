import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-blue-600 shadow-lg top-0 sticky z-30 p-1'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-2'>
        <Link to='/'>
          <h1 className='font-bold gap-2 text-sm sm:text-xl flex flex-wrap'>
            <span className='text-white font-bold text-[20px] sm:text-[32px]'>Mekxos</span>
            <span className='text-white font-bold text-[20px] sm:text-[32px]'> Properties</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-[100px] sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-3 items-center'>
          <Link to='/'>
            <li className='hidden text-[18px] sm:inline text-white hover:underline p-1'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden text-[18px] sm:inline text-white hover:underline p-1'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 mr-3 sm:mr-3 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-[18px] text-white hover:underline p-2 bg-primary'> SignIn</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
