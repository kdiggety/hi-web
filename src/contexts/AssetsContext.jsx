import { createContext, useEffect, useState } from "react";
import data from "@data/data.json";

export const AssetsContext = createContext();

export const AssetsProvider = ({ children }) => {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        if (data !== undefined && data.data !== undefined) {
            const cleanedData = 
                data.data.filter(asset => asset !== undefined 
                    && asset._id !== undefined && asset.name !== undefined)
            setAssets(cleanedData);
        }
    }, [])

    const createAsset = (asset) => {
        setAssets((prevAssets) => [...prevAssets, asset]);
    }

    const updateAsset = (asset) => {
        setAssets((prevAssets) => prevAssets.map((prevAsset) => {
            if (prevAsset._id === asset._id) {
                return asset;
            }
            return prevAsset;
        }));
    }

    const deleteAsset = (asset) => {
        setAssets((prevAssets) => prevAssets.filter(asset => asset._id !== asset._id));
    }

    const values = {
        assets,
        createAsset,
        updateAsset,
        deleteAsset
    }

    return (
        <AssetsContext.Provider value={values}>
            {children}
        </AssetsContext.Provider>
    )
}