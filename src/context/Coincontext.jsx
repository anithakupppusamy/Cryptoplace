import { APIKeys } from "@clerk/clerk-react";
import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();
const apikey = import.meta.env.VITE_COINGECKO_API_KEY;


const CoinContextProvider = (props) => {

    const [allcoin, setAllcoin] = useState([]);
    const [currency, setCurrency] = useState({

        name: "usd",
        symbol: "$"
    });

    const fetchAllcoin = async () => {
        const options = {
            method: "GET",
            headers: {
                "x-cg-api-key": apikey,
            },
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,options)

            .then((response) => response.json())
            .then(response => setAllcoin(response)
)
            .catch((error) => console.error(error));
    }
    useEffect(() => {
        fetchAllcoin();
    }, [currency]);
    

    const contextvalue = {
        allcoin,currency,setCurrency 

    }

    return (
        <CoinContext.Provider value={contextvalue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;