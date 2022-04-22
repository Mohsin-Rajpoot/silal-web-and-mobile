import React from 'react'
import { Link } from 'react-router-dom'
import { expandRowsData } from './Data'
import { ExpandedTableStyled } from './LongOrdersStyled'

const ExpandableRows = () => {
    return (
        <div className="expanded-table-main">
            <ExpandedTableStyled>
                <tbody>
                    {expandRowsData.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <Link to="/orders/order-detail" className="d-flex">
                                    <div className="img center">
                                        <img src={row.img} alt="img" />
                                    </div>
                                    <div>
                                        <p>{row.name}</p>
                                        <p>{row.itemDetail}</p>
                                    </div>
                                </Link>
                            </td>
                            <td>
                                <p className="grey">Quantity</p>
                                <p>{row.qty}</p>
                            </td>
                            <td>
                                <p className="grey">Charsct-s</p>
                                <p>{row.clr}</p>
                            </td>
                            <td>
                                <p className="grey">Item ID</p>
                                <p>{row.itemId}</p>
                            </td>
                            <td>
                                <p className="grey">In stock</p>
                                <p>{row.stock}</p>
                            </td>
                            <td>
                                <p className="grey">Price</p>
                                <p>{row.price}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ExpandedTableStyled>
        </div>
    )
}

export default ExpandableRows