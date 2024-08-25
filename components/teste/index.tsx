'use client'

import { useGlobalContext } from "@/context/GlobalContext"

const Teste = () => {
    const {setIsLightTheme} = useGlobalContext()
  return (
    <button onClick={() => setIsLightTheme(prev => !prev)}>
      teste
    </button>
  )
}

export default Teste