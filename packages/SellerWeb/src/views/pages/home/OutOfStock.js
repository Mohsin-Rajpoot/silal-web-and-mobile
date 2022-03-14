import React from 'react'
import Nav from "../../components/home/Nav"
import TableData from "../../components/Table"
import { TableStyled } from '../../components/Style'
import {
    shirt,
    DropdownMenu,
} from "../../components/AllImages"

<<<<<<< HEAD
const OutOfStock = ({ setSideBar }) => {
=======
const OutOfStock = ({ setSideBar , sideBar }) => {
>>>>>>> b62894287e2ebca268f9de269a39ecb8916323f7
    const columns = [
        {
            name: 'Photo',
            selector: row => row.photo,
        },
        {
            name: 'Item name',
            selector: row => row.item,
        },
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Remaining',
            selector: row => row.remaining,
        },
        {
            name: 'Variant',
            selector: row => row.variant,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Action',
            selector: row => row.action,
        }
    ];

    const data = [
        {
            id: 1,
            photo: <img src={shirt} alt="alt" />,
            item: 'Mans T-shirt',
            category: 'Clothing',
            remaining: '3',
            variant: '2',
            status: <span className="stock-status out">Out of stock</span>,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
        {
            id: 2,
            photo: <img src={shirt} alt="alt" />,
            item: 'Mans T-shirt',
            category: 'Clothing',
            remaining: '0',
            variant: '3',
            status: <span className="stock-status low">Low of stock</span>,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
        {
            id: 3,
            photo: <img src={shirt} alt="alt" />,
            item: 'Mans T-shirt',
            category: 'Clothing',
            remaining: '2',
            variant: '2',
            status: <span className="stock-status low">Low of stock</span>,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
        {
            id: 4,
            photo: <img src={shirt} alt="alt" />,
            item: 'Mans T-shirt',
            category: 'Clothing',
            remaining: '2',
            variant: '2',
            status: <span className="stock-status out">Out of stock</span>,
            price: '$ 120.00',
            action: <button className="action-btn"><DropdownMenu /></button>,
        },
    ]

    return (
        <>
<<<<<<< HEAD
            <Nav setSideBar={setSideBar} />
=======
            <Nav setSideBar={setSideBar} sideBar={sideBar} />
>>>>>>> b62894287e2ebca268f9de269a39ecb8916323f7
            <TableStyled>
                <TableData
                    cols={columns}
                    rows={data}
                />
            </TableStyled>
        </>
    )
}

export default OutOfStock