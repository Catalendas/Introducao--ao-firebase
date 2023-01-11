import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getPlansAction, setPlansAction, updatePlansAction } from './services/dataAcess/actions/plansActions'
import { getPlansObserver } from './services/observers/plansObservers'


function App() {

  const [state, setState] = useState<any[]>([])

  useEffect(() => {
    // Ler os elementos
    // getPlansAction()
    // .then(res => {
    //   console.log(res)
    // })

    // Ler em tempo real os elementos
    getPlansObserver(setState)
  }, [])

  return (
    <>
      {state.map(state => (
        <p>{state.text}</p>
      ))}
    </>
  )
}

export default App
