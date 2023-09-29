import React from 'react'
import { Link } from 'react-router-dom'



const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'Fauna', to: '/categoria/Fauna', current: false },
  { name: 'Paisaje', to: '/categoria/Paisaje', current: false },
  { name: 'Fine Arte', to: '/categoria/FineArte', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  return (
          <>
              <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <Link
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-1 text-sm font-medium '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
            </>
  )
}

export default NavBar