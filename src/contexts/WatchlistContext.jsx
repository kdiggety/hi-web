import { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState(() => {
        const storedWatchlist = localStorage.getItem('watchlist');
        return storedWatchlist ? JSON.parse(storedWatchlist) : [];
    });

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (asset) => {
        if (isOnWatchlist(asset.ticker)) {
            return
        }
        setWatchlist((prevWatchlist) => [...prevWatchlist, asset]);
    }

    const removeFromWatchlist = (asset) => {
        setWatchlist((prevWatchlist) => prevWatchlist.filter((item) => item.ticker !== asset.ticker));
    }
    
    const isOnWatchlist = (ticker) => {
        return watchlist.some(asset => asset.ticker === ticker)
    }

    const values = {
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isOnWatchlist,
    }

    return (
        <WatchlistContext.Provider value={values}>
            {children}
        </WatchlistContext.Provider>
    )
}