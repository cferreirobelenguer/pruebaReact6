import React from 'react'
import {ListaContext} from './ListaContext'

const ReactLanguage={
      lenguaje:"React",
      dificultad:"media",
      popularidad:"alta",  
}
const VueLanguage={
      lenguaje:"Vue",
      dificultad:"baja",
      popularidad:"baja",
}
const AngularLanguage={
      lenguaje:"Angular",
      dificultad:"alta",
      popularidad:"media",
}
export const ListaProvider=({children})=>{
  
    return(
      <ListaContext.Provider value={{ReactLanguage:ReactLanguage, VueLanguage:VueLanguage,AngularLanguage:AngularLanguage}}>
        {children}
      </ListaContext.Provider>
    )
}