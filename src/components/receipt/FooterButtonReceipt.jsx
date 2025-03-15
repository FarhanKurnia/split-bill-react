export default function FooterButtonReceipt({setCurrentPage}) {
    return(
    <div>
        {/* Tombol untuk Mobile (di bawah) */}
        {/* <div className="fixed bottom-6 left-0 w-full flex justify-center py-4 md:hidden">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-md mx-2">Back</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md mx-2">Next</button>
        </div>
        {/* Tombol untuk Desktop (setelah tabel) */}
        {/* <div className="hidden md:flex justify-center mt-6">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-md mx-2">Back</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md mx-2">Next</button>
        </div> */}

        {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={() => setCurrentPage("additionalCost")}
            >
              Back
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Download
            </button>
          </div>
    </div>
    )
}