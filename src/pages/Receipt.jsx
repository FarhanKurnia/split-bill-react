import FooterButtonReceipt from "../components/receipt/FooterButtonReceipt";
import HeaderReceipt from "../components/receipt/HeaderReceipt";
import TableReceipt from "../components/receipt/TableReceipt";

export default function Receipt({ setCurrentPage }) {
    return(
        <div>
            <HeaderReceipt />
            <TableReceipt />
            <FooterButtonReceipt setCurrentPage={setCurrentPage} />
        </div>
    )
    
}