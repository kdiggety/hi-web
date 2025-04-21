import { Routes, Route } from 'react-router-dom'
import Watchlist from '@pages/Watchlist'
import Search from '@pages/Search'
import Profile from '@pages/Profile'

function Body({ assets, updateAsset, deleteAsset, userProfile }) {
  return (
        <div className="app-body">
          <main>
            <Routes>
              <Route path="/" element={<Watchlist />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile userProfile={userProfile} />} />
            </Routes>
          </main>
        </div>
  )
}

export default Body