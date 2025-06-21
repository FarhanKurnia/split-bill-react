export default function TableReceipt({dataPerson, setDataPerson, dataCost, setDataCost}){
     // Pisahkan biaya tambahan dan diskon
      const totalAdditionalCost = dataCost
      .filter(cost => cost.item !== "Discount") // Ambil hanya biaya tambahan (bukan diskon)
      .reduce((sum, cost) => sum + cost.price, 0);

    const totalDiscount = dataCost
      .filter(cost => cost.item === "Discount") // Ambil hanya diskon
      .reduce((sum, cost) => sum + cost.price, 0);

    // Hitung total biaya tambahan setelah diskon
    const perPersonAdditionalCost = ((totalAdditionalCost/dataPerson.length) > 0 ) ? (totalAdditionalCost/dataPerson.length) : 0;

    // Hitung total belanja semua orang (tanpa biaya tambahan)
    const totalOrdersAll = dataPerson.reduce((sum, person) => {
      return sum + person.orders.reduce((s, o) => s + o.price * o.quantity, 0);
    }, 0);

    // Hitung total diskon per orang
    const calculateDiscountPerPerson = (person) => {
      const totalOrders = person.orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
      const discount = (totalOrdersAll > 0) ? (totalDiscount * totalOrders / totalOrdersAll) : 0;
      return discount;
    };

    // Hitung total per orang
    const calculateTotalPerPerson = (person) => {
      const totalOrders = person.orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
      const personDiscount = calculateDiscountPerPerson(person);
      return totalOrders - personDiscount + perPersonAdditionalCost;;
    };

    // Hitung total semua orang
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
                      {dataCost.find(cost => cost.item === "Shipping cost") && (
                        <ul className="space-y-1">
                          <li className="flex justify-between text-sm border-b border-gray-600 pb-1">
                            <span>Shipping</span>
                            <span className="ml-4">
                              Rp. {Math.round(
                                dataCost.find(cost => cost.item === "Shipping cost").price / dataPerson.length
                              ).toLocaleString()}
                            </span>
                          </li>
                        </ul>
                      )}
                      {dataCost.find(cost => cost.item === "Discount") && (
                        <ul className="space-y-1">
                          <li className="flex justify-between text-sm border-b border-gray-600 pb-1">
                            <span>Discount</span>
                            <span className="ml-4 text-red-500">
                              -Rp. {Math.round(calculateDiscountPerPerson(person)).toLocaleString()}
                            </span>
                          </li>
                        </ul>
                      )}
                      <ul className="space-y-1 ">
                        <li
                            className="flex justify-between text-sm border-b border-gray-600 pb-1"
                          >
                            <span>Total</span>
                            <span className="ml-4">Rp. {Math.round(calculateTotalPerPerson(person)).toLocaleString()}</span>
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
                <span>Rp. {totalAllPersons.toLocaleString()}</span>
            </div>
            <span className="text-sm text-gray-400 mt-1">*Price includes discount, tax and shipping cost</span>
            <span className="text-xs opacity-40 py-6">made with 🩶 by farhankurnia </span>
          </div>
        </div>
    )
}