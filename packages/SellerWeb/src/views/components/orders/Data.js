
import { dish, itemImg } from '../../components/AllImages'

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

const expandRowsData = [
    {
        img: itemImg,
        name: "Guess Saffiano",
        itemDetail: "(GUCB15TBK) laptop bag 15",
        qty: "2",
        clr: "Black, Big",
        itemId: "#7DG8098",
        stock: "42",
        price: "$ 4.00",
    },
    {
        img: itemImg,
        name: "Guess Saffiano",
        itemDetail: "(GUCB15TBK) laptop bag 15",
        qty: "2",
        clr: "Black, Big",
        itemId: "#7DG8098",
        stock: "42",
        price: "$ 4.00",
    },
]

export {
    orderData,
    orderListData,
    expandRowsData,
}