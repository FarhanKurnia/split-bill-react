import { useState } from "react";

export default function FormInputOrder() {
    const [value, setValue] = useState(1);

    const handleChange = (e) => {
        let num = parseInt(e.target.value) || 1; // Pastikan angka valid
        if (num < 1) num = 1; // Tidak boleh kurang dari 1
        if (num > 1000) num = 1000; // Tidak boleh lebih dari 100
        setValue(num);
    };
    return(
        <div className="flex flex-col items-center justify-center w-full">
            <label className="font-semibold whitespace-nowrap">Input Order</label>
            <div className="flex items-center gap-3 w-full max-w-lg mx-auto py-4">
                <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="input menu here"
                />
            </div>
            
            <div className="flex items-center gap-3 w-full max-w-lg mx-auto py-4">
                <input
                type="number"
                value={value}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                min="1"
                max="1000"
                step="1"
                />
                <input
                type="number"
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="input price here"
                required
                />
            </div>
             {/* Fix Dropdown Select */}
             <div className="flex items-center gap-3 w-full max-w-lg mx-auto py-4">
                <div className="relative w-full">
                    <select 
                        defaultValue="Select name here"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none"
                    >
                        <option disabled={true}>Select name here</option>
                        <option>Farhan</option>
                        <option>Kurnia</option>
                        <option>Ragil</option>
                    </select>
                    
                    {/* Custom Dropdown Icon */}
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        ⌄
                    </div>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap">
                    Add
                </button>
            </div>
        </div>
    )
}