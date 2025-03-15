export default function TableAdditionalCost(){
    return(
        <div className="overflow-x-auto max-w-lg mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>No. </th>
                    <th>Additional Cost</th>
                    <th>Cost</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        Shipping cost
                    </td>
                    <td>
                        Rp. 20.000
                    </td>
                </tr>
                {/* row 2 */}
                <tr>
                    <td>
                        2
                    </td>
                    <td>
                        Tax
                    </td>
                    <td>
                        Rp. 10.000
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        )
}