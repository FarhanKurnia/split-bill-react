export default function TableReceipt({dataPerson, setDataPerson, dataCost, setDataCost}){
     // 1️⃣ Pisahkan biaya tambahan dan diskon
      const totalAdditionalCost = dataCost
      .filter(cost => cost.item !== "Discount") // Ambil hanya biaya tambahan (bukan diskon)
      .reduce((sum, cost) => sum + cost.price, 0);

    const totalDiscount = dataCost
      .filter(cost => cost.item === "Discount") // Ambil hanya diskon
      .reduce((sum, cost) => sum + cost.price, 0);

    // 2️⃣ Hitung total biaya tambahan setelah diskon
    const netAdditionalCost = totalAdditionalCost - totalDiscount;
    const perPersonAdditionalCost = netAdditionalCost / dataPerson.length;

    // 3️⃣ Fungsi untuk menghitung total per orang
    const calculateTotalPerPerson = (person) => {
      const totalOrders = person.orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
      return totalOrders + perPersonAdditionalCost;
    };

    // 4️⃣ Hitung total semua orang
    const totalAllPersons = dataPerson.reduce((sum, person) => sum + calculateTotalPerPerson(person), 0);

      return (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="overflow-x-auto mt-4">
            <table className="w-full border border-gray-500 table-xs">
              <thead>
                <tr className="border-b border-gray-500">
                  <th className="p-2 text-left">No.</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Order</th>
                </tr>
              </thead>
              <tbody>
                {dataPerson.map((person, index) => (
                  <tr key={person.id} className="border-b border-gray-500">
                    <td className="p-2 align-top text-left">{index+1}.</td>
                    <td className="p-2 align-top font-semibold text-left">{person.name}</td>
                    <td className="p-2">
                      <ul className="space-y-1 ">
                        {person.orders.map((order) => (
                          <li
                            key={order.id}
                            className="flex justify-between text-sm border-b border-gray-600 pb-1"
                          >
                            <span>{order.quantity} x {order.item}</span>
                            <span className="ml-4">Rp. {order.totalPrice.toLocaleString()}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-1 ">
                        {dataCost.map((order, index) => (
                          <li
                            key={order.id}
                            className="flex justify-between text-sm border-b border-gray-600 pb-1"
                          >
                            <span>{order.item}</span>
                            <span className="ml-4">Rp. {(order.price/dataPerson.length).toLocaleString()}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-1 ">
                        <li
                            className="flex justify-between text-sm border-b border-gray-600 pb-1"
                          >
                            <span>Total</span>
                            <span className="ml-4">Rp. {calculateTotalPerPerson(person).toLocaleString()}</span>
                          </li>
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
                <span>{totalAllPersons}</span>
            </div>
            <span className="text-sm text-gray-400 mt-1">*Price includes tax and shipping costs</span>
            </div>
        </div>
    )
    
}