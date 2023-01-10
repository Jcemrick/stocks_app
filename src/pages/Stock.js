import { useLoaderData } from "react-router-dom"

const Stock = (props) => {
    
    const stock = useLoaderData();
    


    return (
        <div>
        <h3>Name: {stock[0].name}</h3>
        <h3>Price: {stock[0].price}</h3>
        </div>
    )
}

export default Stock