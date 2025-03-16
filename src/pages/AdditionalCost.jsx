import { useEffect, useState } from "react"; // ✅ Tambahkan useEffect di sini
import FooterAdditionalCost from "../components/additional-cost/FooterAdditionalCost";
import FormInputAdditionalCost from "../components/additional-cost/FormInputAdditionalCost";
import TableAdditionalCost from "../components/additional-cost/TableAdditionalCost";

export default function AdditionalCost({ setCurrentPage }) {
    const [dataCost, setDataCost] = useState([]);
    
        // 🔥 Ambil data dari Local Storage saat pertama kali render
        useEffect(() => {
            const storedCosts = JSON.parse(localStorage.getItem("dataCost")) || [];
            setDataCost(storedCosts);

            const handleStorageChange = () => {
                const updatedCosts = JSON.parse(localStorage.getItem("dataCost")) || [];
                setDataPerson(updatedCosts);
                };
        
                // Event listener untuk mendeteksi perubahan di Local Storage
                window.addEventListener("storage", handleStorageChange);
        
                return () => {
                window.removeEventListener("storage", handleStorageChange);
                };
        }, []);
    return(
        <div>
            <FormInputAdditionalCost setDataCost={setDataCost} dataCost={dataCost}/>
            {dataCost.length > 0 && <TableAdditionalCost dataCost={dataCost} setDataCost={setDataCost} />}
            <FooterAdditionalCost setCurrentPage={setCurrentPage} />
        </div>
    )
}