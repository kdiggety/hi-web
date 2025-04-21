import '@styles/App.css'
import LabelValue from '@components/LabelValue'

function AssetListRow({ asset, addAsset, removeAsset, containsAsset }) { 
  return (
    (asset.name != null) ? 
        <>
            <div className="asset-header-left"><a href={asset.weburl}>{asset.name}</a></div>
            <div className="asset-header-right">
                <ul className="horizontal-list">
                    {
                        (addAsset !== undefined && (containsAsset === undefined || !containsAsset(asset._id))) ?
                        <li>
                            <a href={asset.weburl} onClick={(e) => {
                            e.preventDefault()
                            addAsset(asset)
                            }}>Add</a>
                        </li> : <li/>
                    }
                    {
                        (removeAsset !== undefined && (containsAsset === undefined || containsAsset(asset._id))) ?
                        <li>
                            <a href={asset.weburl} onClick={(e) => {
                            e.preventDefault()
                            removeAsset(asset)
                            }}>Remove</a>
                        </li> : <li/>
                    }
                </ul>
            </div>
            <div>
                <LabelValue label="Country" value={asset.country} />
                <LabelValue label="Currency" value={asset.currency} />
                <LabelValue label="Market Capitalization" value={asset.marketCapitalization} />
            </div>
        </> : <div/>
  )
}

export default AssetListRow