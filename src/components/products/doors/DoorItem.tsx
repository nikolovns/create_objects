import React from 'react';

export interface DoorProps {
    productType: string,
    model: string,
    width: number,
    height: number,
    shape: string
}

export const DoorItem: React.FC<DoorProps> = (door) => {
    return (
        <div>
            <div>{door.model}</div>
            <div>{door.shape}</div>
        </div>
    )
}