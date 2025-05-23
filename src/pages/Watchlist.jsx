import { useContext, useState } from 'react'
import AssetList from "@components/AssetList"
import Modal from 'react-modal'
import { WatchlistContext } from '@contexts/WatchlistContext';

function Watchlist() { 
  const { watchlist, removeFromWatchlist, isOnWatchlist } = useContext(WatchlistContext)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentAsset, setCurrentAsset] = useState({})
  
  /*const saveUpdateAsset = (updatedItem) => {
    setModalIsOpen(false)
    updateAsset(updatedItem)
    setCurrentAsset({})
  }*/

  const openUpdateAsset = (ticker) => {
    const asset = watchlist.find((asset) => asset.ticker === ticker)
    if (asset) {
      setCurrentAsset(asset)
      setModalIsOpen(true)
    }
  }

  const handleAssetChange = (e) => {
    const { name, value } = e.target
    setCurrentAsset((prevCurrentAsset) => ({
      ...prevCurrentAsset,
      [name]: value
    }))
  }

  return (
        <>
        <div className="body-header">Watchlist</div>
        {
          (watchlist === undefined || watchlist.length === 0) ? <p>Empty Watchlist</p> :
            <div>
              <AssetList assets={watchlist} removeAsset={removeFromWatchlist} containsAsset={isOnWatchlist} />
              <Modal
                  ariaHideApp={false}
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  contentLabel={currentAsset.name}
                  style={{
                    overlay: {
                      backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                      top: '50%',
                      left: '50%',
                      right: 'auto',
                      bottom: 'auto',
                      marginRight: '-50%',
                      transform: 'translate(-50%, -50%)'
                    }
                  }}
                >
                  <h2>{currentAsset.name}</h2>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="name">Name</label>
                    <label htmlFor="country">Country</label>
                    <label htmlFor="currency">Currency</label>
                    <label htmlFor="marketCapitalization">Market Capitalization</label>
                    <label htmlFor="weburl">Web URL</label>
                    <input type="text" name="name" defaultValue={currentAsset.name} onChange={handleAssetChange} />
                    <input type="text" name="country" defaultValue={currentAsset.country} onChange={handleAssetChange} />
                    <input type="text" name="currency" defaultValue={currentAsset.currency} onChange={handleAssetChange} />
                    <input type="text" name="marketCapitalization" defaultValue={currentAsset.marketCapitalization} onChange={handleAssetChange} />
                    <input type="text" name="weburl" defaultValue={currentAsset.weburl} onChange={handleAssetChange} /> 
    
                    <input type="button" value="Save" onClick={() => saveUpdateAsset(currentAsset)} />
                    <input type="button" value="Cancel" onClick={() => setModalIsOpen(false)} />
                  </form>
                </Modal>
            </div>
          }
        </>
  )
}

export default Watchlist