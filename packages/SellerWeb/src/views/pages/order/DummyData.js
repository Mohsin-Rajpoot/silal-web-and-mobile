
import {
    dish,
} from '../../components/AllImages'

const orderData = [
    {
        quantity: 2,
        name: "French fries"
    },
    {
        quantity: 1,
        name: "Cheesecakes with sour cream and citrus hone"
    },
]

const orderListData = [
    {
        img: dish,
        name: "Cheesecakes with sour cream and citrus hone",
        qty: "2",
        price: "$ 4.00",
        totalPrice: "$ 8.00",
    },
    {
        img: dish,
        name: "Cheesecakes with sour cream and citrus hone",
        qty: "2",
        price: "$ 4.00",
        totalPrice: "$ 8.00",
    },
    {
        img: dish,
        name: "Cheesecakes with sour cream and citrus hone",
        qty: "2",
        price: "$ 4.00",
        totalPrice: "$ 8.00",
    },
    {
        img: dish,
        name: "Cheesecakes with sour cream and citrus hone",
        qty: "2",
        price: "$ 4.00",
        totalPrice: "$ 8.00",
        note: "Please do not add onion and fry it without oil. I'm allergic.",
    },
    {
        img: dish,
        name: "Cheesecakes with sour cream and citrus hone",
        qty: "2",
        price: "$ 4.00",
        totalPrice: "$ 8.00",
        customization: [
            {
                custItem: "Mushrooms",
                custQty: "1",
                custPrice: "$ 0.50",
                custTotalPrice: "$ 2.90",
            },
            {
                custItem: "Mushrooms",
                custQty: "1",
                custPrice: "$ 0.50",
                custTotalPrice: "$ 2.90",
            }
        ]
    },
]

export {
    orderData,
    orderListData
}