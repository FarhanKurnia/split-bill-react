export default function FooterOrder({setCurrentPage, dataPerson}) {
  const hasOrders = dataPerson?.every(person => person.orders?.length >= 1);
  // const hasPersons = dataPerson?.some(person => person?.length > 1);
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