import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { addPlansAction, deletePlansAction, getPlansAction, setPlansAction, updatePlansAction } from './services/dataAcess/actions/plansActions'
import { getPlansObserver } from './services/observers/plansObservers'
import { Button } from './commons/Buttoon'
import { PlanGetType } from './interfaces/plansInterfaces'
import { PlansPage } from './pages/PlansPage'


function App() {



  return (
    <>
      <PlansPage/>
    </>
  )
}

export default App
