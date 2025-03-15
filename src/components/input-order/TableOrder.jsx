export default function TableOrder() {
    return(
        <div className="overflow-x-auto max-w-lg mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>No. </th>
                    <th>Menu</th>
                    <th>Price</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        1 x Gacoan
                    </td>
                    <td>
                        Rp. 20.000
                    </td>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="font-bold">Hart Hagerty</div>
                    </div>
                    </td>
                </tr>
                {/* row 2 */}
                <tr>
                    <td>
                        2
                    </td>
                    <td>
                        1 x Thai Greentea
                    </td>
                    <td>
                        Rp. 20.000
                    </td>
                    <td>
                        <div className="font-bold">Hart Hagerty</div>
                    </td>
                </tr>
                {/* row 3 */}
                <tr>
                    <td>
                        3
                    </td>
                    <td>
                        1 x Udang Keju
                    </td>
                    <td>
                        Rp. 12.000
                    </td>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="font-bold">Brice Swyre</div>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        )
    
}

