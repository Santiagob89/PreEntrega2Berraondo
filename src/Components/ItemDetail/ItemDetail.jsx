import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({item}) => {
  return (

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{item.name}</h2>

                      <section className="mt-2">
                        <h3>
                        {item.description}
                        </h3>
                      </section >
                      <section className="mt-2"> 
                      <p className="text-2xl text-gray-900">AR {item.price}</p>
                      <p className="text-2xl text-gray-900">Series disponibles {item.stock}</p>
                      </section>
                      <section>
                        <div>
                          <ItemCount stockItems={10}/>
                        </div>
                      </section>

                    </div>
                </div>
  )
}

export default ItemDetail