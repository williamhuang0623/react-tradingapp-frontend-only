import React from "react";
import Hidden from "./Hidden";

class Bots extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="float-right">
                    <h5>Welcome Back, Steve Bitondo!</h5>
                </div>
                <div className="col-md-12 bot-container">
                <h1>Bots</h1>
                    <table>
                        <tr>
                            <th>Exchange</th>
                            <th>Pair</th>
                            <th>Value</th>
                            <th>Capital</th>
                            <th>% Change</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                        {/* Dummy Rows, need to be populated by backend */}
                        <tr>
                            <td>GDAX</td>
                            <td>BTC/ETH</td>
                            <td>$5751</td>
                            <td>$5000</td>
                            <td>15.02%</td>
                            <td>Running</td>
                            <td>--Bot Details--</td>
                        </tr>
                        <tr>
                            <td>GDAX</td>
                            <td>BTC/ETH</td>
                            <td>$5751</td>
                            <td>$5000</td>
                            <td>15.02%</td>
                            <td>Running</td>
                            <td>--Bot Details--</td>
                        </tr>
                        <tr>
                            <td>GDAX</td>
                            <td>BTC/ETH</td>
                            <td>$5751</td>
                            <td>$5000</td>
                            <td>15.02%</td>
                            <td>Running</td>
                            <td>--Bot Details--</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Bots;