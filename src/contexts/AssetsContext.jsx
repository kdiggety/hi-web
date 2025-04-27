import { createContext, useEffect, useState } from "react";
import { getCompanyProfiles } from "../serviceClients/companyProfileClient";
//import data from "@data/data.json";

export const AssetsContext = createContext();

export const AssetsProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [assets, setAssets] = useState([]);

    /*useEffect(() => {
        if (data !== undefined && data.data !== undefined) {
            const cleanedData = 
                data.data.filter(asset => asset !== undefined 
                    && asset._id !== undefined && asset.name !== undefined)
            setAssets(cleanedData);
        }
    }, [])*/

    useEffect(() => {
        const callCompanyProfiles = async () => {
            try {
                if (isLoading) {
                    return
                }

                const response = await getCompanyProfiles();
                
                if (response?.data?.companyProfiles !== undefined) {
                    const cleanedData = 
                        response.data.companyProfiles.filter(asset => asset !== undefined 
                                && asset.ticker !== undefined && asset.name !== undefined)
                    setAssets(cleanedData);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error fetching company profiles:', error);
                throw error;
            }
        }

        callCompanyProfiles();
    }, [isLoading])

    const createAsset = (asset) => {
        setAssets((prevAssets) => [...prevAssets, asset]);
    }

    const updateAsset = (asset) => {
        setAssets((prevAssets) => prevAssets.map((prevAsset) => {
            if (prevAsset.ticker === asset.ticker) {
                return asset;
            }
            return prevAsset;
        }));
    }

    const deleteAsset = (asset) => {
        setAssets((prevAssets) => prevAssets.filter(asset => asset.ticker !== asset.ticker));
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