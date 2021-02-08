import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BreadCrumb: FC<{ page: 'home' | 'profile' }> = ({ page }) => {
  return (
    <div className="flex items-center justify-center h-20 bg-custom px-10 relative z-50">
      {page === 'profile' && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-white mr-2"
          width="20"
        />
      )}
      <h1 className="text-lg text-white font-bold capitalize">{page}</h1>
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
    </div>
  )
}

export default BreadCrumb
