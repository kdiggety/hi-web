import AssetCard from '@components/AssetCard'

function AssetList({ assets, openUpdateAsset, deleteAsset }) { 
  return (
        <>
        {
            assets.map((asset) => (
                <AssetCard key={asset._id} {...asset} openUpdateAsset={openUpdateAsset} deleteAsset={deleteAsset} />
            ))
        }
        </>
  )
}

export default AssetList