import React from 'react'
import {Link} from 'react-router-dom';


const Item = ({item}) => {
  return (
    
    <Link to={"/item/" + item.id} className='text-decoration-none'>
        <div key={item.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={item.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{item.price}</p>
              </div>
            </div>
    </Link>



  )
}

export default Item;


