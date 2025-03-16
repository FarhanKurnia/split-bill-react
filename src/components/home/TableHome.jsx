export default function TableHome({ dataPerson }) {
    if (dataPerson.length === 0) return null; // Jika data kosong, jangan render tabel
    return(
        <div className="overflow-x-auto max-w-lg mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>No. </th>
                    <th>Name</th>
                    <th></th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
}