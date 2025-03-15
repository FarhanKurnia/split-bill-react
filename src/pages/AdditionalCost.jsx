import FooterAdditionalCost from "../components/additional-cost/FooterAdditionalCost";
import FormInputAdditionalCost from "../components/additional-cost/FormInputAdditionalCost";
import TableAdditionalCost from "../components/additional-cost/TableAdditionalCost";
import FooterButton from "../components/general/FooterButton";

export default function AdditionalCost({ setCurrentPage }) {
    return(
        <div>
            <FormInputAdditionalCost />
            <TableAdditionalCost />
            <FooterAdditionalCost setCurrentPage={setCurrentPage} />
        </div>
    )
}