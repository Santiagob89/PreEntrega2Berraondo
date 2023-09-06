import React from 'react'


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Bio', href: '#', current: false },
  { name: 'Series', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
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
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
            </>
  )
}

export default NavBar