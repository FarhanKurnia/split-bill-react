import { useState } from "react";
import FooterHome from "../components/home/FooterHome";
import FormInputHome from "../components/home/FormInputHome";
import TableHome from "../components/home/TableHome";

export default function Home({ setCurrentPage }){
    const [dataPerson, setDataPerson] = useState([])

    return(
        <div>
            <FormInputHome setDataPerson={setDataPerson} dataPerson={dataPerson}/>
            <TableHome dataPerson={dataPerson} />
            <FooterHome setCurrentPage={setCurrentPage} dataPerson={dataPerson}/> {/* Kirim setCurrentPage */}
    </div>
    )
}