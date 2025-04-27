export const getCompanyProfileByTicker = async (ticker) => {
    try {
        const response = await fetch(
            `http://localhost:9081/company-service/graphql`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: 
                    `query CompanyProfileByTicker {
                        companyProfileByTicker(ticker: "${ticker}") {
                            ticker
                            country
                            currency
                            estimateCurrency
                            exchange
                            finnhubIndustry
                            ipo
                            logo
                            marketCapitalization
                            name
                            phone
                            shareOutstanding
                            weburl
                        }
                    }`,
                })
            }
        );
        return response.data;
    } catch (error) {
        console.error(`Error fetching company profile for ticker ${ticker}:`, error);
        throw error;
    }
}

export const getCompanyProfiles = async () => {
    try {
        const response = await fetch(
            `http://localhost:9081/company-service/graphql`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: `query {
                        companyProfiles {
                            ticker
                            country
                            currency
                            estimateCurrency
                            exchange
                            finnhubIndustry
                            ipo
                            logo
                            marketCapitalization
                            name
                            phone
                            shareOutstanding
                            weburl
                        }
                    }`,
                })
            }
        );
        return response.json();
    } catch (error) {
        console.error('Error fetching company profile:', error);
        throw error;
    }
}