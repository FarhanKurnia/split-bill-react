
import FooterHome from "../components/home/FooterHome";
import FormInputHome from "../components/home/FormInputHome";
import TableHome from "../components/home/TableHome";

export default function Home({ setCurrentPage }){
    return(
        <div>
            <FormInputHome />
            <TableHome />
            <FooterHome setCurrentPage={setCurrentPage} /> {/* Kirim setCurrentPage */}
    </div>
    )
}