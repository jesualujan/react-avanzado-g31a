// consumidor del contexto 
import { useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";

export const useAuthContext = () => {
      // quiero usar mi contexto y esto lo guardo en context
      const context = useContext(AuthContext)
  // si no se crea el contexto mando un error, si es undefined (vacío) lanzo el error
  if (!context) {
    throw new Error('useAuthContext debe ser usado dentro de AuthProvider')
  }
  return context
}