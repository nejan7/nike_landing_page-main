import { useState, useEffect } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resize] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [resize]);

  return (
    <header className='padding-x py-8 absolute z-30 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} width={130} alt="Logo" />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='max-lg:block hidden' onClick={toggleMenu}>
          <img src={hamburger} width={25} height={25} alt="Menu" />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <ul
        className={`fixed left-0 top-0 w-[60%] h- bg-[rgba(255,255,255,0.9)] shadow-lg z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out max-lg:flex flex-col items-center justify-center`}
      >
        <div className='flex justify-end w-full p-4'>
          <button onClick={toggleMenu}>
            <svg
              className='w-6 h-6 text-gray-700'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>
        </div>
        {navLinks.map((item) => (
          <li key={item.label} className='p-4'>
            <a
              href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray'
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Nav;
