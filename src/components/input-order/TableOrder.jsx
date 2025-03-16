export default function TableOrder() {
    const dataOrder = [
        {
            id: 1,
            name: "Farhan",
            avatar:"https://img.daisyui.com/images/profile/demo/3@94.webp",
            orders: [
                { id: 1, item: "Gacoan lvl 1", price: "Rp. 12.000" },
                { id: 2, item: "Thai Green Tea", price: "Rp. 14.000" },
            ],
        },
        {
            id: 2,
            name: "Madu",
            avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
            orders: [
                { id: 3, item: "Udang Keju", price: "Rp. 8.000" },
                { id: 4, item: "Gacoan lvl 3", price: "Rp. 12.000" },
            ],
        },
        {
            id: 3,
            name: "Baskara",
            avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp",
            orders: [
                { id: 5, item: "Gacoan lvl 3", price: "Rp. 12.000" },
            ],
        }
      ];

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
                {dataOrder.map((person) => 
                    person.orders.map((order) => (
                        <tr key={order.id}> 
                            <td>{order.id}</td>
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

