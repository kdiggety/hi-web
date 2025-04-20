import '@styles/App.css'
import LabelValue from '@components/LabelValue'

function AssetCard({ _id, name, country, currency, marketCapitalization, weburl, openUpdateAsset, deleteAsset }) { 
  return (
    (name != null) ? 
        <>
            <div className="asset-header"><a href={weburl}>{name}</a></div>
            <div className="asset-header-right">
                <a href={weburl} onClick={(e) => {
                    e.preventDefault()
                    openUpdateAsset(_id)
                    }}>Edit</a>
                <a href={weburl} onClick={(e) => {
                    e.preventDefault()
                    deleteAsset(_id)
                    }}>Delete</a>
            </div>
            <div>
                <LabelValue label="Country" value={country} />
                <LabelValue label="Currency" value={currency} />
                <LabelValue label="Market Capitalization" value={marketCapitalization} />
            </div>
        </> : <div/>
  )
}

export default AssetCard