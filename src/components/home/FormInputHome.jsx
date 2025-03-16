import { useState } from "react";

export default function FormInputHome({ setDataPerson, dataPerson }) {
    const [name, setName] = useState("");

    const handleAddPerson = () => {
        if (!name.trim()) {
            alert("Nama tidak boleh kosong!");
            return;
        }

        // Cek apakah nama sudah ada
        if (dataPerson.some((person) => person.name.toLowerCase() === name.toLowerCase())) {
            alert("Nama sudah ada!");
            return;
        }

        // Tambah orang baru
        setDataPerson((prev) => [
            ...prev,
            {
                id: Date.now(), // ID unik
                name,
                avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png",
            },
        ]);

        // Reset input setelah menambah
        setName("");
    };
    return(
        <div className="flex flex-col items-center justify-center w-full">
            <label className="font-semibold whitespace-nowrap">Input Name</label>
            <div className="flex items-center gap-3 w-full max-w-lg mx-auto py-4">
                <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="input name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap"
                onClick={handleAddPerson}>
                    Add
                </button>
            </div>
        </div>
    )
}