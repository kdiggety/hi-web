import { useState } from 'react'
import '@styles/App.css'
import initData from '@data/data.json'
import Header from '@components/Header'
import Menu from '@components/Menu'
import Body from '@components/Body'

function App() {
  const [userProfile, setUserProfile] = useState({name: 'Ken Lewis', accountNumber: '1234567890', balance: 10000, address: '123 Main St.', phone: '555-555-1234', email: 'ken.lewis@email.com', city: 'Kentown', country: 'USA'})
  const [data, setData] = useState(initData)
    
  const updateAsset = (updatedItem) => {
    const newData = data.data.map((item) => {
      if (item._id === updatedItem._id) {
        return updatedItem
      }
      return item
    })
    setData({ data: newData })
  }

  const deleteAsset = (id) => {
    const newData = data.data.filter((item) => item._id !== id)
    setData({ data: newData })
  }

  return (
    <>
      {
        (data === undefined || data.data === undefined) ? <p>Loading...</p> :
        <>
          <Header userProfile={userProfile} />
          <Menu />
          <Body className="app-body" assets={data.data} updateAsset={updateAsset} deleteAsset={deleteAsset} userProfile={userProfile} />
        </>
      }
    </>
  )
}

export default App
