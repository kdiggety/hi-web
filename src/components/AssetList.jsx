import AssetListRow from '@components/AssetListRow'

function AssetList({ assets, addAsset, removeAsset, containsAsset }) {
  return (
        <>
        {
            (assets === undefined || assets.length === 0) ? <p>No assets</p> :
            assets.map((asset) => (
                <AssetListRow key={asset.ticker} asset={asset} addAsset={addAsset} removeAsset={removeAsset} containsAsset={containsAsset} />
            ))
        }
        </>
  )
}

export default AssetList