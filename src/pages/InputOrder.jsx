import { useEffect, useState } from "react"; // ✅ Tambahkan useEffect di sini

import FooterButton from "../components/general/FooterButton";
import FooterOrder from "../components/input-order/FooterOrder";
import FormInputOrder from "../components/input-order/FormInputOrder";
import TableOrder from "../components/input-order/TableOrder";



export default function InputOrder({ setCurrentPage }) {
    const [dataPerson, setDataPerson] = useState([]);

    // 🔥 Ambil data dari Local Storage saat pertama kali render
    useEffect(() => {
        const storedPersons = JSON.parse(localStorage.getItem("dataPerson")) || [];
        setDataPerson(storedPersons);
    }, []);

    // 🔥 Pastikan tabel diperbarui secara langsung setelah penambahan data
    useEffect(() => {
        const handleStorageChange = () => {
        const updatedPersons = JSON.parse(localStorage.getItem("dataPerson")) || [];
        setDataPerson(updatedPersons);
        };

        // Event listener untuk mendeteksi perubahan di Local Storage
        window.addEventListener("storage", handleStorageChange);

        return () => {
        window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return(
        <div>
            <FormInputOrder setDataPerson={setDataPerson} dataPerson={dataPerson}/>
            {dataPerson.length > 0 && <TableOrder dataPerson={dataPerson} setDataPerson={setDataPerson} />}
            {/* <TableOrder dataPerson={dataPerson}/> */}
            <FooterOrder setCurrentPage={setCurrentPage}  />
        </div>
    )
    
}