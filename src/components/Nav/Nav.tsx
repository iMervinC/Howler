import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import useWindowSize from '../../hooks/useWindowSize'
import useLocalStorage from '../../hooks/useLocalStorage'
import MobileNav from './MobileNav'
import { motion, AnimatePresence } from 'framer-motion'

const Nav: FC = () => {
  const [where, setWhere] = useState<string>('home')
  const [nav, setNav] = useState<boolean>(false)
  const size = useWindowSize()
  const [tab, setTab] = useLocalStorage<any>('nav', 'home')

  const navigation: string[] = [
    'home',
    'about',
    'projects',
    'blogs',
    'contacts',
  ]

  const whereHandler = (_tab: string) => {
    setWhere(_tab)
    setTab(_tab)
    setNav(false)
  }

  useEffect(() => {
    setWhere(tab)
  }, [])

  return (
    <nav className="nav">
      <Link scroll={false} href="/">
        <a onClick={() => whereHandler('home')}>
          <Logo />
        </a>
      </Link>
      <div className="flex justify-between items-center">
        {size.width <= 768 ? (
          <AnimatePresence>
            {nav && (
              <MobileNav
                navigation={navigation}
                where={where}
                whereHandler={whereHandler}
              />
            )}
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            {nav && (
              <motion.ul
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 25, opacity: 0 }}
                className="font-bold flex gap-10 text-xl mr-2"
              >
                {navigation.map((nav, index) => (
                  <Link
                    scroll={false}
                    key={index}
                    href={nav === 'home' ? '/' : `/${nav}`}
                  >
                    <a onClick={() => whereHandler(nav)}>
                      <li
                        className={`uppercase hover:text-custom transition duration-500 ${
                          nav === where && 'text-custom'
                        }`}
                      >
                        {nav}
                      </li>
                    </a>
                  </Link>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        )}

        <div
          id="nav-icon4"
          className={`${size.width <= 768 && 'ml-auto'} ${nav && 'open-n'}`}
          onClick={() => setNav(!nav)}
        >
          <span
            className={
              !nav
                ? `bg-custom-offwhite`
                : `bg-custom` + ' transition-colors duration-500'
            }
          ></span>
          <span
            className={
              !nav
                ? `bg-custom-offwhite`
                : `bg-custom` + ' transition-colors duration-500'
            }
          ></span>
          <span
            className={
              !nav
                ? `bg-custom-offwhite`
                : `bg-custom` + ' transition-colors duration-500'
            }
          ></span>
        </div>
      </div>
    </nav>
  )
}

export default Nav
