export default function TableOrder({dataPerson, setDataPerson}) {
    const hasOrders = dataPerson?.some(person => person.orders?.length > 0);
    if (!hasOrders) return null; // Jika tidak ada order, footer tidak ditampilkan
    return(
        <div className="overflow-x-auto max-w-lg mx-auto">
            <table className="table">
                <thead>
                <tr>
                    <th>No. </th>
                    <th>Menu</th>
                    <th>Price</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {dataPerson.map((person) => 
                    (person.orders || []).map((order, index) => (
                    <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td>{order.item}</td>
                        <td>{order.price}</td>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="font-bold">{person.name}</div>
                        </div>
                        </td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
            </div>
        )
    
}

