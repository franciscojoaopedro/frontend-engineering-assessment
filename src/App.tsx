import { useEffect } from 'react'

import { useApiCall } from './hooks/useApiCall'


function App() {

  const {getUsers}=useApiCall()
  
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <>
      <div>
          <h1>Api</h1>
      </div>
    </>
  )
}

export default App
