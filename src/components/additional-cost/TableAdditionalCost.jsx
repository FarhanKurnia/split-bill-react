export default function TableAdditionalCost(){
    const dataCost = [
        {
            id: 1,
            name: "Shipping cost",
            price: 14000,
        },
        {
            id: 2,
            name: "Tax",
            price: 5000,
        },
        {
            id: 3,
            name: "Discount",
            price: 2000,
        }
      ];
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
                    {dataCost.map((cost) =>(
                        <tr key={cost.id}>
                            <td>
                                {cost.id}
                            </td>
                            <td>
                                {cost.name}
                            </td>
                            <td>
                                {cost.price}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}