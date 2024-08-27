import React, { useState } from 'react'
import ChooseIndicator from './ChooseIndicator'
import { useParams, useSearchParams } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (event: any) => {
    event.preventDefault()
    setSearchParams(search);
  }
  return (
    <header className='w-full py-7 bg-sky-800 flex items-center justify-center'>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" className='p-2 rounded-tl-lg rounded-bl-lg outline-none' name='search' onChange={(e) => setSearch(e.target.value)} />
          <input type="submit" value="Search" className='py-2 px-8 bg-white text-gray-700 font-bold rounded-tr-lg rounded-br-lg cursor-pointer' />
        </form>
      </div>
      <div className='absolute top-0 right-3'>
        <ChooseIndicator />
      </div>
    </header>
  )
}

export default Header;
