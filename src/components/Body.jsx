import { Routes, Route } from 'react-router-dom'
import Watchlist from '@pages/Watchlist'
import Profile from '@pages/Profile'

function Body({ assets, updateAsset, deleteAsset, userProfile }) {
  return (
        <div className="app-body">
          <main>
            <Routes>
              <Route path="/" element={<Watchlist assets={assets} updateAsset={updateAsset} deleteAsset={deleteAsset} />} />
              <Route path="/search" element={<Watchlist assets={assets} updateAsset={updateAsset} deleteAsset={deleteAsset} />} />
              <Route path="/profile" element={<Profile userProfile={userProfile} />} />
            </Routes>
          </main>
        </div>
  )
}

export default Body