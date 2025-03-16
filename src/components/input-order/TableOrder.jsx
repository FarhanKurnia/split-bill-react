export default function TableOrder({dataPerson, setDataPerson}) {
    const hasOrders = dataPerson?.some(person => person.orders?.length > 0);
    if (!hasOrders) return null; // Jika tidak ada order, footer tidak ditampilkan

    const handleRemoveOrder = (orderId) => {
        // 1️⃣ Ambil data dari localStorage
        let storedData = JSON.parse(localStorage.getItem("dataPerson")) || [];
    
        // 2️⃣ Looping ke setiap `person` dan filter `orders`
        storedData = storedData.map(person => ({
            ...person,
            orders: person.orders.filter(order => order.id !== orderId) // Hapus order dengan ID tertentu
        }));
    
        // 3️⃣ Simpan kembali data yang sudah dihapus ke localStorage
        localStorage.setItem("dataPerson", JSON.stringify(storedData));
    
        // 4️⃣ Perbarui state agar UI langsung berubah
        setDataPerson(storedData);
    };
    return(
        <div className="overflow-x-auto max-w-lg mx-auto">
            <table className="table table-xs">
                <thead>
                <tr>
                    <th>No. </th>
                    <th>Menu</th>
                    <th>Price</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {dataPerson.map((person) => 
                    (person.orders || []).map((order, index) => (
                    <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td>{order.item}</td>
                        <td>{order.quantity} x {order.price}</td>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="font-bold">{person.name}</div>
                        </div>
                        </td>
                        <td>
                            <button className="btn btn-ghost p-2 hover:bg-red-100 rounded-full"
                            onClick={() => handleRemoveOrder(order.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
            </div>
        )
    
}

