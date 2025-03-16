export default function FooterOrder({setCurrentPage, dataPerson}) {
  const hasOrders = dataPerson?.some(person => person.orders?.length > 0);
    return(
    <div>
        {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => setCurrentPage("home")}
            >
              Back
            </button>
            {hasOrders && (<button className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => setCurrentPage("additionalCost")}
            >
              Next
            </button>)}
          </div>
    </div>
    )
}