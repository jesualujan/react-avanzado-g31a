//* 3) Crear un hook para usar el contexto y consumir el contexto
import { useContext } from 'react'
import { SongContext } from '../Context/SongContext'

// hago el export de una función

export const useSongContext = () => {
  // quiero usar mi contexto y esto lo guardo en context
  const context = useContext(SongContext)
  // si no se crea el contexto mando un error, si es undefined (vacío) lanzo el error
  if (!context) {
    throw Error('useSongContext debe ser usado dentro de SongProvider')
  }
  return context
}
