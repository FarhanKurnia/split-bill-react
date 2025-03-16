export default function HeaderReceipt(){
    const getFormattedDate = () => {
        const today = new Date();
        return today.toLocaleDateString("en-US", {
            weekday: "long",  // Nama hari (Saturday)
            day: "2-digit",   // Tanggal (12)
            month: "long",    // Nama bulan (March)
            year: "numeric"   // Tahun (2025)
        });
    };
    return(
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl font-bold">Receipt Split Bill</h1>
            <div class="text-sm opacity-50 py-2">{getFormattedDate()}</div>
            <hr className="border-t border-gray-300 my-4" />
        </div>
    )
}