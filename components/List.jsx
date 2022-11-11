import React, {useContext} from 'react'
import {ListaContext} from '../context/ListaContext'
import Styles from '../assets/css/styles.module.css'

const List=()=>{
  const listado=useContext(ListaContext)
  
  return(
    <div className={Styles.container}>
        <div className={Styles.ReactContainer}>
            <div className={Styles.ReactTitle}>
                <h1>{listado.ReactLanguage.lenguaje}</h1>
            </div>
            <div className={Styles.ReactDificult}>
                <h4>Dificultad:<br></br>{listado.ReactLanguage.dificultad}</h4>
            </div>
            <div className={Styles.ReactPopularity}>
                <h4>Popularidad:<br></br>{listado.ReactLanguage.popularidad}</h4>
            </div>
        </div>
        <div className={Styles.VueContainer}>
            <div className={Styles.VueTitle}>
              <h1>{listado.VueLanguage.lenguaje}</h1>
            </div>
            <div className={Styles.VueDificult}>
                <h4>Dificultad:<br></br>{listado.VueLanguage.dificultad}</h4>
            </div>
            <div className={Styles.VuePopularity}>
              <h4>Popularidad:<br></br>{listado.VueLanguage.popularidad}</h4>
            </div>
        </div>
        <div className={Styles.AngularContainer}>
            <div className={Styles.AngularTitle}>
              <h1>{listado.AngularLanguage.lenguaje}</h1>
            </div>
            <div className={Styles.AngularDificult}>
                <h4>Dificultad:<br></br>{listado.AngularLanguage.dificultad}</h4>
            </div>
            <div className={Styles.AngularPopularity}>
                <h4>Popularidad:<br></br>{listado.AngularLanguage.popularidad}</h4>
            </div>
        </div>
    </div>
  )
}
export default List