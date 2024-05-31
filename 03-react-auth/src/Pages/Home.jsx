import { useState,useEffect } from 'react'
import { getAllItemsService } from '@/Services/itemServices'

const Home = () => {
    const [ itemList, setItemList ] = useState([]) // llenamos el estado de productos

    useEffect(() => {
        const fetchItemData = async () => {
            try {
                const response = await getAllItemsService()
                if(response.status === 200 ) {
                    setItemList(response.data)
                }
            }catch(error){
                console.log('Ocurrio un error en Home', error)
            }
        }
        fetchItemData()
    }, [])

  return (
    <> 
        <h1>Bienvenido al Home</h1>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
    {/* Si itemsData no esta vacio, recorro el arreglo con Map, y creo una card de bootstrap para cada elemento (producto/item) */}
            { itemList && itemList.map((product) => (
            <div className='card' style={{width: '18rem'}} key={product.id}>
            <img className='card-img-top' style={{maxHeight: '300px'}}  src={product.image} alt={product.product_name} />
             <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              {/* Aquí no se implementa el boton, pero basta con sustituir <a> </a> por <NavLink> </NavLink>  react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
              <a href='#' className='btn btn-primary'> comprar </a>
            </div>
            </div>
            ))}
         </div>
    </>
  )
}

export default Home