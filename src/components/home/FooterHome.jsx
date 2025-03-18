export default function FooterHome({ setCurrentPage,  dataPerson}) {
  if (dataPerson.length < 2) return null; // Jika data kosong, jangan render tabel
    return(
    <div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => setCurrentPage("inputOrder")}>
              Next
            </button>
          </div>
    </div>
    )
}