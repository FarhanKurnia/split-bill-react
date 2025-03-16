import { useEffect, useState } from "react";

export default function FormInputOrder({setDataPerson, dataPerson}) {
    const [menu, setMenu] = useState(""); // Nama menu
    const [price, setPrice] = useState(); // Harga
    const [quantity, setQuantity] = useState(); // Jumlah
    const [selectedPerson, setSelectedPerson] = useState(0); // ID person yang dipilih

    useEffect(() => {
        // Ambil data dari localStorage saat halaman dimuat
        const storedPersons = JSON.parse(localStorage.getItem("dataPerson")) || [];
        setDataPerson(storedPersons);
        if (storedPersons.length > 0) {
            setSelectedPerson(storedPersons[0].id.toString()); // Set default hanya sekali
        }
    }, []);

    const handleAddOrder = () => {
        if (!menu || !price || !selectedPerson) {
            alert("Harap isi semua data!");
            return;
        }

        const newOrder = {
            id: Date.now(), // ID unik
            item: menu,
            price: +price,
            quantity: quantity,
            totalPrice: (+price)*quantity,
        };

        // Update localStorage
        const updatedPersons = dataPerson.map(person => {
            if (person.id === parseInt(selectedPerson)) {
                return {
                    ...person,
                    orders: [...(person.orders || []), newOrder]
                };
            }
            return person;
        });

        localStorage.setItem("dataPerson", JSON.stringify(updatedPersons));
        setDataPerson(updatedPersons);

        // Reset input fields
        setMenu("");
        setPrice("");
        setQuantity(1);
        if (dataPerson.length > 0) {
            setSelectedPerson(dataPerson[0].id);
        }
    };

    return(
        <div className="flex flex-col items-center justify-center w-full">
            <label className="font-semibold whitespace-nowrap">Input Order</label>
            <div className="flex items-center gap-3 w-full max-w-lg mx-auto py-4">
                <input
                type="text"
                value={menu}
                onChange={(e) => setMenu(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="input menu here"
                />
            </div>
            
            <div className="flex items-center gap-3 w-full max-w-lg mx-auto py-4">
                <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}               
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="input quantity here"
                required
                />
                <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="input price here"
                required
                />
            </div>
             {/* Fix Dropdown Select */}
             <div className="flex items-center gap-3 w-full max-w-lg mx-auto py-4">
                <div className="relative w-full">
                    <select 
                        value={selectedPerson}
                        onChange={(e) => setSelectedPerson(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none"
                    >
                        <option value="" disabled>Select name here</option>
                        {dataPerson.map((person, index) => (
                            <option key={index} value={person.id}>{person.name}</option>
                        ))}
                    </select>
                    
                    {/* Custom Dropdown Icon */}
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        ⌄
                    </div>
                </div>

                <button 
                onClick={handleAddOrder}
                className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap">
                    Add
                </button>
            </div>
        </div>
    )
}