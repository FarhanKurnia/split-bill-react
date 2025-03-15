export default function FooterAdditionalCost({setCurrentPage}) {
    console.log(setCurrentPage)
    return(
    <div>
        {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => setCurrentPage("inputOrder")}
            >
              Back
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => setCurrentPage("receipt")}
            >
              Next
            </button>
          </div>
    </div>
    )
}