import { useEffect, useState } from "react"; // ✅ Tambahkan useEffect di sini

import FooterHome from "../components/home/FooterHome";
import FormInputHome from "../components/home/FormInputHome";
import TableHome from "../components/home/TableHome";

export default function Home({ setCurrentPage }){
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
            <FormInputHome setDataPerson={setDataPerson} dataPerson={dataPerson}/>
            {dataPerson.length > 0 && <TableHome dataPerson={dataPerson} setDataPerson={setDataPerson} />}

            {/* <TableHome dataPerson={dataPerson} /> */}
            <FooterHome setCurrentPage={setCurrentPage} dataPerson={dataPerson}/> {/* Kirim setCurrentPage */}
    </div>
    )
}