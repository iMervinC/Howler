import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import SearchBar from './SearchBar'

const BreadCrumb: FC<{ page: 'home' | 'profile' }> = ({ page }) => {
  const router = useRouter()

  return (
    <div className="flex items-center  h-20 bg-custom px-10 relative">
      {page === 'profile' && (
        <FontAwesomeIcon
          onClick={() => router.back()}
          icon={faArrowLeft}
          className="text-white mr-2 cursor-pointer"
          width="20"
        />
      )}
      <h1 className="text-lg text-white font-bold capitalize">{page}</h1>
      {/* {page === 'home' && <SearchBar />} */}
    </div>
  )
}

export default BreadCrumb
