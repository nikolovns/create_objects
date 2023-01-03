import { DoorItem } from "./DoorItem";
import { CreateProduct } from "../CreateProducts";

const doorsListItems = [
    { productType: 'door', model: 'Model 1', width: 90, height: 190, shape: 'circle' },
    { productType: 'door', model: 'Model 2', width: 95, height: 190, shape: 'rectangle' }
]

export function DoorsList() {

    const doorsList = doorsListItems.map((door, index) => {
        return <DoorItem key={index} {...door} />
    });

    return (
        <div>
            <div>
                <CreateProduct />
            </div>
            <div>{doorsList}</div>
        </div>

    )
}