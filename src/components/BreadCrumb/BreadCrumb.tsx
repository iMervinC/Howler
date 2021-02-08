import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'

const BreadCrumb: FC<{ page: 'home' | 'profile' }> = ({ page }) => {
  return (
    <div className="flex items-center  h-20 bg-custom px-10 relative z-50">
      {page === 'profile' && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-white mr-2"
          width="20"
        />
      )}
      <h1 className="text-lg text-white font-bold capitalize">{page}</h1>
      {page === 'home' && <SearchBar />}
    </div>
  )
}

export default BreadCrumb
