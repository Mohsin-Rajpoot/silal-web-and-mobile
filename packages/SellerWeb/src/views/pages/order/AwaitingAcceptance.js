import React, { useState } from 'react'
import LongOrdersNav from '../../components/orders/LongOrdersNav'
import DataTable from 'react-data-table-component'
import ExpandableRows from '../../components/orders/ExpandableRows'
import '../../components/rsuite.css'
import { DateRangePicker } from 'rsuite'
import { Wrapper } from '../../components/orders/LongOrdersStyled'
import { SearchWindow, FilterBtn } from '../../components/UseFullElements'
import { HeadingStyled, TableStyled, Label, Select, Button } from '../../components/Style'
import { SortArrows, CalendarIcon2 } from '../../components/AllImages'

const AwaitingAcceptance = () => {
    const [showFilters, setShowFilters] = useState(false)
    const [searchBtn, setSearchBtn] = useState(false)

    const customStyles = {
        headCells: {
            style: {
                fontSize: "13px",
                fontWeight: 700
            },
        }
    }
    const columns = [
        {
            name: 'Order ID',
            selector: row => row.order,
        },
        {
            name: 'Customer name',
            selector: row => row.customer,
        },
        {
            name: 'Order Date',
            selector: row => row.date,
        },
        {
            name: 'Items',
            selector: row => row.items,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Total price',
            selector: row => row.price,
        },
    ];

    const data = [
        {
            id: 1,
            order: '#723DN2',
            customer: 'Leslie A.',
            date: '12.11.2021',
            items: '2',
            status: <span className="stock-status low">Pending</span>,
            price: '$ 1272.20',
        },
        {
            id: 2,
            order: '#723DN2',
            customer: 'Leslie A.',
            date: '12.11.2021',
            items: '2',
            status: <span className="stock-status low">Pending</span>,
            price: '$ 1272.20',
        },
        {
            id: 3,
            order: '#723DN2',
            customer: 'Leslie A.',
            date: '12.11.2021',
            items: '2',
            status: <span className="stock-status low">Pending</span>,
            price: '$ 1272.20',
        },
        {
            id: 4,
            order: '#723DN2',
            customer: 'Leslie A.',
            date: '12.11.2021',
            items: '2',
            status: <span className="stock-status low">Pending</span>,
            price: '$ 1272.20',
        },
        {
            id: 5,
            order: '#723DN2',
            customer: 'Leslie A.',
            date: '12.11.2021',
            items: '2',
            status: <span className="stock-status low">Pending</span>,
            price: '$ 1272.20',
        },
        {
            id: 6,
            order: '#723DN2',
            customer: 'Leslie A.',
            date: '12.11.2021',
            items: '2',
            status: <span className="stock-status low">Pending</span>,
            price: '$ 1272.20',
        },
        {
            id: 7,
            order: '#723DN2',
            customer: 'Leslie A.',
            date: '12.11.2021',
            items: '2',
            status: <span className="stock-status low">Pending</span>,
            price: '$ 1272.20',
        },
    ]

    return (
        <Wrapper>
            <LongOrdersNav />
            <div className="nav d-flex">
                <HeadingStyled className="poppins" size="25px" weight="700" margin="0 24px 0 0">Orders</HeadingStyled>
                <SearchWindow
                    classN="search"
                    height="40px"
                    change={() => setSearchBtn(true)}
                />
                {searchBtn &&
                    <Button width="114px">Search</Button>
                }
                <button className="sort center"><SortArrows /></button>
                <FilterBtn click={() => setShowFilters(!showFilters)} />
            </div>
            {showFilters &&
                <div className="filters">
                    <div className="width">
                        <Label>Delivery method</Label>
                        <Select>
                            <option value="">All methods</option>
                            <option value="">All methods</option>
                        </Select>
                    </div>
                    <div className="width">
                        <Label>Category</Label>
                        <Select>
                            <option value="">All categories</option>
                            <option value="">All categories</option>
                        </Select>
                    </div>
                    <div className="width">
                        <Label>Pickup time</Label>
                        <Select>
                            <option value="">All</option>
                            <option value="">All</option>
                        </Select>
                    </div>
                    <div className="width">
                        <Label>Status</Label>
                        <Select>
                            <option value="">Pending</option>
                            <option value="">Complete</option>
                        </Select>
                    </div>
                    <div>
                        <div><Label>Date</Label></div>
                        <DateRangePicker
                            className="archive-table-range"
                            placement='bottomRight'
                            showOneCalendar
                            format="dd MMMM yy"
                            placeholder="dd mm yy"
                            character="&#160;&#160;-&#160;&#160;"
                            caretAs={CalendarIcon2}
                        />
                    </div>
                </div>
            }
            <TableStyled>
                <DataTable
                    customStyles={customStyles}
                    columns={columns}
                    data={data}
                    expandableRows
                    expandableRowsComponent={ExpandableRows}
                    pagination
                />
            </TableStyled>
        </Wrapper>
    )
}

export default AwaitingAcceptance