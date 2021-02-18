import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar: FC = () => {
  return (
    <form className="flex justify-end ml-auto px-4 py-2 w-auto bg-white rounded-full search">
      <input
        className="focus:outline-none text-right w-2/3"
        type="text"
        name="search"
        id="search"
        spellCheck="false"
        autoComplete="off"
        placeholder="Search Howler"
      />
      <button className="ml-2 justify-self-center w-4 hover:text-custom focus:outline-none">
        <FontAwesomeIcon icon={faSearch} className="fill-current" />
      </button>
    </form>
  )
}

export default SearchBar
