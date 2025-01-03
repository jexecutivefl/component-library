import TwoRowColumn from "@/components/TwoRowColumn/TwoRowColumn";
import CardOne from "../cards/components/CardOne/CardOne";

export default function ColumnLayouts(){
    return (
        <div>
            <h1>Column Layouts</h1>
        <TwoRowColumn>
            <CardOne>Row 1</CardOne>
            <CardOne>Row 2</CardOne>
        </TwoRowColumn>
        </div>
    )
}