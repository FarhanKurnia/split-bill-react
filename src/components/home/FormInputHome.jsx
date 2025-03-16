import { useState } from "react";

export default function FormInputHome({ setDataPerson, dataPerson }) {
    const [name, setName] = useState("");

    const handleAddPerson = () => {
        if (!name.trim()) return; // Cegah input kosong

        const getInitials = (name) => {
            const nameParts = name.split(" "); // Memisahkan nama berdasarkan spasi
            const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join(""); // Mengambil huruf pertama dari setiap bagian nama
            return initials;
        };

        const initials = getInitials(name); // Mengambil inisial dari nama
        const newPerson = {
        id: Date.now(), // ID unik
        name,
        avatar: `https://ui-avatars.com/api/?name=${initials}&background=random`,
        };

        // Ambil data lama dari Local Storage
        const storedPersons = JSON.parse(localStorage.getItem("dataPerson")) || [];

        // Tambahkan data baru ke array
        const updatedPersons = [...storedPersons, newPerson];

        // Simpan ke Local Storage
        localStorage.setItem("dataPerson", JSON.stringify(updatedPersons));

        // 🔥 Langsung perbarui state agar UI langsung berubah tanpa refresh
        setDataPerson(updatedPersons);

        // Reset input setelah ditambahkan
        setName("")
    }
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