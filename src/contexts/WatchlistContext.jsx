import { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const storedWatchlist = localStorage.getItem('watchlist');
        if (storedWatchlist) {
            setWatchlist(JSON.parse(storedWatchlist));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (asset) => {
        if (isOnWatchlist(asset._id)) {
            return
        }
        setWatchlist((prevWatchlist) => [...prevWatchlist, asset]);
    }

    const removeFromWatchlist = (asset) => {
        setWatchlist((prevWatchlist) => prevWatchlist.filter((item) => item._id !== asset._id));
    }
    
    const isOnWatchlist = (id) => {
        return watchlist.some(asset => asset._id === id)
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