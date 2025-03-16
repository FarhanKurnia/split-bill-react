import domtoimage from "dom-to-image";


export default function FooterButtonReceipt({setCurrentPage}) {
  const handleDownload = () => {
    const element = document.getElementById("receipt-section");
    const originalColor = getComputedStyle(element).color;
    element.style.color = "black";
    domtoimage.toPng(element,
      {
        bgcolor: "white", // Warna latar belakang
      }
    )
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "Receipt.png";
        link.click();
        element.style.color = originalColor;
      })
      .catch((error) => {
        console.error("Error capturing image:", error);
      });
  };
  
    return(
    <div>
        {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={() => setCurrentPage("additionalCost")}
            >
              Back
            </button>
            <button onClick={handleDownload} className="px-4 py-2 bg-green-600 text-white rounded-md">Download</button>
          </div>
    </div>
    )
}