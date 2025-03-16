import { useState, useEffect } from "react";

export default function FormInputAdditionalCost({setDataCost, dataCost}) {
    const additionalCostList = [{
            id:1,
            item: "Shipping cost",
        },
        {
            id:2,
            item: "Tax",
        },
        {
            id:3,
            item: "Discount",
        },
    ]
    const [price, setPrice] = useState(""); // Harga
    const [selectedCost, setSelectedCost] = useState(""); // ID person yang dipilih

    useEffect(() => {
        if (additionalCostList.length > 0) {
            setSelectedCost(additionalCostList[0].item); // Set default hanya sekali
        }
        }, []);


    const handleAddCost = () => {
        console.log(selectedCost)
        console.log(price)

        if (!selectedCost || !price) {
            alert("Harap isi semua data!");
            return;
        }

        const newCost = {
            id: Date.now(), // ID unik
            item: selectedCost,
            price: +price,
        };

       // Ambil data lama dari Local Storage
       const storedCosts = JSON.parse(localStorage.getItem("dataCost")) || [];

       // Tambahkan data baru ke array
       const updatedCosts = [...storedCosts, newCost];

       // Simpan ke Local Storage
       localStorage.setItem("dataCost", JSON.stringify(updatedCosts));

       // 🔥 Langsung perbarui state agar UI langsung berubah tanpa refresh
       setDataCost(updatedCosts);

       // Reset input setelah ditambahkan
       setSelectedCost("")
       setPrice("")
    };

    return(
        <div>
            {/* Fix Dropdown Select */}
            <div className="flex flex-col items-center justify-center w-full">
            <label className="font-semibold whitespace-nowrap">Input Additional Cost (optional)</label>
            <div className="flex items-center gap-3 w-full max-w-lg mx-auto py-4">
                <div className="relative w-full">
                    <select 
                        value={selectedCost}
                        onChange={(e) => setSelectedCost(e.target.value)}
                        // defaultValue="Select additional cost here"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none"
                    >
                        <option disabled={true}>Select additional cost here</option>
                        {additionalCostList.map((cost) =>
                            <option key={cost.id} value={cost.item}>{cost.item}</option>
                        )}
                    </select>
                    
                    {/* Custom Dropdown Icon */}
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        ⌄
                    </div>
                </div>
                <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="input price here"
                required
                />
                <button 
                onClick={handleAddCost}
                className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap">
                    Add
                </button>
            </div>
            </div>
        </div>
    )
    
}