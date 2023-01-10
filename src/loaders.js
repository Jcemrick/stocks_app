export const stockLoader = async ({params}) => {

    const symbol = params.symbol;
    const apiKey = process.env.API_KEY;

    return (await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`)).json()
}
