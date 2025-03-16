export default function TableOrder({dataPerson, setDataPerson}) {
    if (dataPerson.length === 0) return null; // Jika data kosong, jangan render tabel
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

