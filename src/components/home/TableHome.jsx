export default function TableHome({ dataPerson, setDataPerson}) {
    // Fungsi untuk menghapus data berdasarkan ID
    const handleDelete = (id) => {
        const updatedData = dataPerson.filter(person => person.id !== id);
        setDataPerson(updatedData);
        localStorage.setItem("dataPerson", JSON.stringify(updatedData));
    };

    if (dataPerson.length === 0) return null; // Jika data kosong, jangan render tabel
    return(
        <div className="overflow-x-auto max-w-lg mx-auto">
            {dataPerson.length > 0 ? (<table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>No. </th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {dataPerson.map((person, index) => (
                        <tr key={person.id}>
                        <td>
                            {index+1}
                        </td>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src={person.avatar}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{person.name}</div>
                            {/* <div className="text-sm opacity-50">United States</div> */}
                            </div>
                        </div>
                        </td>
                        <td>
                            <button className="btn btn-ghost p-2 hover:bg-red-100 rounded-full"
                            onClick={() => handleDelete(person.id)}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>): (
                <p className="text-center">No data available</p>
            )}
            </div>
        )
}