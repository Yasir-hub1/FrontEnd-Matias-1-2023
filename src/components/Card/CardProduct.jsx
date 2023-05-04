import React, { useEffect, useState } from 'react'
import './CardProduct.css'

 const CardProduct=()=> {
    const [cards] = useState([
        {
        title:'Card-1',
        text:'kdsjflkasfkdlkalksadfklsdfkskaflksdfkasdfsdfjsdaklf'
        },
        {
        title:'Card-2',
        text:'kdsjflkasfkdlkalksadfklsdfkskaflksdfkasdfsdfjsdaklf'
        },
        {
        title:'Card-3',
        text:'kdsjflkasfkdlkalksadfklsdfkskaflksdfkasdfsdfjsdaklf'
        },
        {
        title:'Card-4',
        text:'kdsjflkasfkdlkalksadfklsdfkskaflksdfkasdfsdfjsdaklf'
        },
        {
        title:'Card-5',
        text:'kdsjflkasfkdlkalksadfklsdfkskaflksdfkasdfsdfjsdaklf'
        },
        {
        title:'Card-6',
        text:'kdsjflkasfkdlkalksadfklsdfkskaflksdfkasdfsdfjsdaklf'
        },
        {
        title:'Card-7',
        text:'kdsjflkasfkdlkalksadfklsdfkskaflksdfkasdfsdfjsdaklf'
        },
        {
        title:'Card-8',
        text:'kdsjflkasfkdlkalksadfklsdfkskaflksdfkasdfsdfjsdaklf'
        },

    ])
    const [products,setProducts] = useState([])
    /* useEffect(() => {
        const getProduct = ()=>{fetch('http://localhost:4001/products')
          .then((response) => response.json())
          .then((products) => setProducts(products))
      }
      getProduct()
      }, []) */
  return (
    <div>
        <section>
            <div className='container'>
                <div className='cards'>
                    {
                        cards.map((card,index)=>(
                            <div key={index} className='card'>
                            <th>
                            <figure>
                                    <img
                                    className='img'
                                    src="https://i.blogs.es/d5130c/wallpaper-2.png/1366_2000.webp"
                                    width="330px"
                                    height="150px"
                                    />
                            </figure>
                            </th>
                            
                            <h3>{card.name}</h3>
                            <p>
                                Cantidad: {card.quantity}
                            </p>
                            <p>
                                Precio: {card.price} $
                            </p>
                            <button className='btn'>Ir</button>
                        </div>
                        ))
                    }                
                </div>
            </div>
        </section>
    </div>
  )
}
export default CardProduct
