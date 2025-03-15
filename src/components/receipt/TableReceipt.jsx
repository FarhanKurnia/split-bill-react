export default function TableReceipt(){
    const data = [
        {
          no: 1,
          name: "Farhan",
          orders: [
            { item: "Gacoan lvl 1 dqwdwqdwqd", price: "Rp. 12.000" },
            { item: "Thai Green Tea TEAT TETATAT TET", price: "Rp. 14.000" },
            { item: "Shipping Cost", price: "Rp. 1.666" },
            { item: "Tax", price: "Rp. 4.666" },
            { item: "Total", price: "Rp. 21.532", bold: true },
          ],
        },
        {
          no: 2,
          name: "Madu",
          orders: [
            { item: "Udang Keju", price: "Rp. 8.000" },
            { item: "Gacoan lvl 3", price: "Rp. 12.000" },
            { item: "Shipping Cost", price: "Rp. 1.666" },
            { item: "Tax", price: "Rp. 4.666" },
            { item: "Total", price: "Rp. 21.532", bold: true },
          ],
        },
      ];
    
      return (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="overflow-x-auto mt-4">
            <table className="w-full border border-gray-500">
              <thead>
                <tr className="border-b border-gray-500">
                  <th className="p-2 text-left">No.</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Order</th>
                </tr>
              </thead>
              <tbody>
                {data.map((person) => (
                  <tr key={person.no} className="border-b border-gray-500">
                    <td className="p-2 align-top text-left">{person.no}.</td>
                    <td className="p-2 align-top font-semibold text-left">{person.name}</td>
                    <td className="p-2">
                      <ul className="space-y-1 ">
                        {person.orders.map((order, index) => (
                          <li
                            key={index}
                            className="flex justify-between text-sm border-b border-gray-600 pb-1"
                          >
                            <span className={order.bold ? "font-bold text-left" : "text-left"}>
                              {order.item}
                            </span>
                            <span className={order.bold ? "font-bold text-right" : "text-right"}>
                              {order.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col font-semibold mt-4 p-2 border-t border-gray-500">
            <div className="flex justify-between">
                <span>Total</span>
                <span>Rp. 200.000</span>
            </div>
            <span className="text-sm text-gray-400 mt-1">*Price includes tax and shipping costs</span>
            </div>
        </div>
    )
    
}