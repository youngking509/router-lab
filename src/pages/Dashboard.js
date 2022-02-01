import { Link } from 'react-router-dom';
import stocks from '../stockData';

function Dashboard(props) {
    return (
        <div className='stocks-chart'>
            {
                stocks.map((stock, i) => (
                    <table>
                        <tr> 
                            <th>Name</th>
                            <Link key={i} to={`/stock/${stock.symbol}`}>
                            <td>{stock.name}</td>
                            </Link>
                            <th>Price</th>
                            <td>{stock.lastPrice}</td>
                            <th>Change</th>
                            <td>{stock.change}</td>
                        </tr>
                    </table>
                ))
            };
        </div>
    );
}

export default Dashboard;