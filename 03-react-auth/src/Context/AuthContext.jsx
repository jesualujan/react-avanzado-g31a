// contexto -> estado global
// useState -> un estado que me diga si estoy logeado
// useEffect -> para revisar si hay un token y me lo cargue a mi estado 

import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

//* 1) Crear mi contexto
const AuthContext = createContext() // mi contexto va a empezar vacío

//* 2) Crear el proveedor del contexto (provider), es decir maneja de donde se obtiene la información
//* El proveedor es un componente que va a envolver a todos los componentes (hijos)

// eslint-disable-next-line react/prop-types
function AuthProvider({children}) {
    const [isAuth, setIsAuth] = useState(false) // ¿ESTOY AUTENTICADO/LOGEADO? si o no
    const [userPayload, setUserPayload] = useState(null) //JWT payload decoficado - datos del usuario


const login = (token) => {
    // guardamos el token en el localStorage del navegador
    // este dato permance aún si el navegador o la pestaña se cierra y se vuelve abrir 
    localStorage.setItem('token', token)
    const decode = jwtDecode(token) //decodifica el payload del token
    setUserPayload(decode)
    setIsAuth(true) // estoy logeado? si
}


const logout = () => {
  // eliminamos el token del localStorage del navegador
  localStorage.removeItem('token')
  setUserPayload(null) // borramos el payload del estado 
  setIsAuth(false) // estoy logeado? no , cerramos sesión
}

useEffect (() => {
   // reperar el token del localStorage, si no existe devolvera null
   const token = localStorage.getItem('token') // para recuperar token es con geItem, para guardar es con setItem
   if (token) {
     const decode = jwtDecode(token) // decodifica el payload del token
     setUserPayload(decode)
     setIsAuth(true)
   }
 }, [])

  // mandamos un objeto
  const data = {
    isAuth,
    userPayload,
    login,
    logout
  }

  // El proveedor es un componente que va a envolver a otros componentes
  return (
    <AuthContext.Provider value={data}>
      {children}
      </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }