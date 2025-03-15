export default function FormInputAdditionalCost() {
    return(
        <div>
            {/* Fix Dropdown Select */}
            <div className="flex flex-col items-center justify-center w-full">
            <label className="font-semibold whitespace-nowrap">Input Additional Cost (optional)</label>
            <div className="flex items-center gap-3 w-full max-w-lg mx-auto py-4">
                <div className="relative w-full">
                    <select 
                        defaultValue="Select additional cost here"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none"
                    >
                        <option disabled={true}>Select additional cost here</option>
                        <option>Shipping cost</option>
                        <option>Tax</option>
                        <option>Discount</option>
                    </select>
                    
                    {/* Custom Dropdown Icon */}
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        ⌄
                    </div>
                </div>
                <input
                type="number"
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="input price here"
                required
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap">
                    Add
                </button>
            </div>
            </div>
        </div>
    )
    
}