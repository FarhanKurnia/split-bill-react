export default function FormInputHome() {
    return(
        <div className="flex flex-col items-center justify-center w-full">
            <label className="font-semibold whitespace-nowrap">Input Name</label>
            <div className="flex items-center gap-3 w-full max-w-lg mx-auto py-4">
                <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="input name here"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap">
                    Add
                </button>
            </div>
        </div>
    )
}