import { useState, useEffect } from "react";
import FooterButtonReceipt from "../components/receipt/FooterButtonReceipt";
import HeaderReceipt from "../components/receipt/HeaderReceipt";
import TableReceipt from "../components/receipt/TableReceipt";

export default function Receipt({ setCurrentPage }) {
    const [dataPerson, setDataPerson] = useState([]);
    const [dataCost, setDataCost] = useState([]);
        useEffect(() => {
            const storedPersons = JSON.parse(localStorage.getItem("dataPerson")) || [];
            setDataPerson(storedPersons);

            const storedCosts = JSON.parse(localStorage.getItem("dataCost")) || [];
            setDataCost(storedCosts);

            const handleStorageChange = () => {
                const updatedPersons = JSON.parse(localStorage.getItem("dataPerson")) || [];
                setDataPerson(updatedPersons);

                const updatedCosts = JSON.parse(localStorage.getItem("dataCost")) || [];
                setDataCost(updatedCosts);
            };
        
            // Event listener untuk mendeteksi perubahan di Local Storage
            window.addEventListener("storage", handleStorageChange);
        
            return () => {
                window.removeEventListener("storage", handleStorageChange);
            };
        }, []);

    return(
        <div>
            <HeaderReceipt />            
            <TableReceipt dataPerson={dataPerson} setDataPerson={setDataPerson} dataCost={dataCost} setDataCost={setDataCost} />
            <FooterButtonReceipt setCurrentPage={setCurrentPage} />
        </div>
    )
    
}