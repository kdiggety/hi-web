import { useContext } from 'react'
import { WatchlistContext } from '@contexts/WatchlistContext'
import AssetCard from '@components/AssetCard'

function AssetList({ assets, openUpdateAsset, deleteAsset }) {
  return (
        <>
        {
            assets === undefined || assets.length === 0 ? <p>No assets</p> :
            assets.map((asset) => (
                <AssetCard key={asset._id} {...asset} openUpdateAsset={openUpdateAsset} deleteAsset={deleteAsset} />
            ))
        }
        </>
  )
}

export default AssetList