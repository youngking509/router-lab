import stocks from '../stockData'

function Stock(props) {
    const symbol = props.match.params.symbol;

    let eachStock
    stocks.forEach((s) => {
        if (s.symbol === symbol) {
            eachStock = s;
        };
    });

    return (
        <div>
            <h1> {eachStock.symbol} - {eachStock.name} </h1>
            <h3>Last Price: {eachStock.lastPrice} </h3>
            <h3>Change: {eachStock.change} </h3>
            <h3>High: {eachStock.high} </h3>
            <h3>Low: {eachStock.low} </h3>
            <h3>Open: {eachStock.open} </h3>
        </div>
    );
}

export default Stock;