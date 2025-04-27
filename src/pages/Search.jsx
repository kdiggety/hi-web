import { useEffect, useContext, useState } from 'react'
import AssetList from "@components/AssetList"
import { AssetsContext } from '@contexts/AssetsContext';
import { WatchlistContext } from '@contexts/WatchlistContext';

function Search() { 
  const { assets } = useContext(AssetsContext)
  const [filteredAssets, setFilteredAssets] = useState(assets)

  useEffect(() => {
    if (assets !== undefined && assets.length > 0) {
      setFilteredAssets(assets)
    }
  }, [assets])

  const { watchlist, addToWatchlist, removeFromWatchlist, isOnWatchlist } = useContext(WatchlistContext)

  const filterAssets = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    console.log(searchTerm)
    if (searchTerm === undefined || searchTerm?.trim().length === 0) {
      setFilteredAssets(assets)
      return
    }
    const filteredAssets = assets.filter(asset => {
        return asset.name?.toLowerCase().includes(searchTerm) || asset.ticker?.toLowerCase().includes(searchTerm)
    })
    setFilteredAssets(filteredAssets)
  }

  return (
        <>
        <div className="body-header">Search</div>
        <div>
          <input type="text" placeholder="Search..." onChange={filterAssets} />
        </div>
        {
          (filteredAssets === undefined || filteredAssets.length === 0) ? <p>Empty Search</p> :
            <div>
              <AssetList assets={filteredAssets} addAsset={addToWatchlist} removeAsset={removeFromWatchlist} containsAsset={isOnWatchlist} />
            </div>
        }
        </>
  )
}

export default Search