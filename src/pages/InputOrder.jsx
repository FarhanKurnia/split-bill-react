import FooterButton from "../components/general/FooterButton";
import FooterOrder from "../components/input-order/FooterOrder";
import FormInputOrder from "../components/input-order/FormInputOrder";
import TableOrder from "../components/input-order/TableOrder";

export default function InputOrder({ setCurrentPage }) {
    return(
        <div>
            <FormInputOrder />
            <TableOrder />
            <FooterOrder setCurrentPage={setCurrentPage}  />
        </div>
    )
    
}