import React from 'react'
import Database from '../views/pages/clients/components/Database'
const Statistics = React.lazy(() => import('../views/pages/home/Statistics'))
const Reviews = React.lazy(() => import('../views/pages/home/Reviews'))
const OutOfStock = React.lazy(() => import('../views/pages/home/OutOfStock'))
const CurrentOrder = React.lazy(() => import('../views/pages/order/CurrentOrders'))
const OrderDetail = React.lazy(() => import('../views/pages/order/OrderDetail'))
const PreOrders = React.lazy(() => import('../views/pages/order/PreOrders'))
const ArchiveOrders = React.lazy(() => import('../views/pages/order/Archive'))
const AwaitingAcceptance = React.lazy(() => import('../views/pages/order/AwaitingAcceptance'))
const AcceptedOrders = React.lazy(() => import('../views/pages/order/AcceptedOrders'))
const WaitingForPickup = React.lazy(() => import('../views/pages/order/WaitingForPickup'))
const Products = React.lazy(() => import('../views/pages/products/components/Products'))
const ProductDetail = React.lazy(() => import('../views/pages/products/components/ProductDetail'))
const CreateItem = React.lazy(() => import('../views/pages/products/components/CreateItem'))
const AllOffers = React.lazy(() => import('../views/pages/offers/AllOffers'))
const Documents = React.lazy(() => import('../views/pages/Documents'))
const ContactUs = React.lazy(() => import('../views/pages/contact-us/ContactUs'))
const Settings = React.lazy(() => import('../views/pages/settings/Settings'))
const AboutUs = React.lazy(() => import('../views/pages/AboutUs'))
const Profile = React.lazy(() => import('../views/pages/profile/Profile'))
const OpeningHours = React.lazy(() => import('../views/pages/profile/OpeningHours'))
const PaymentHistory = React.lazy(() => import('../views/pages/profile/PaymentHistory'))
const TransactionLedger = React.lazy(() => import('../views/pages/profile/TransactionLedger'))
const CreateNewItem = React.lazy(() => import('../views/pages/listing/CreateItem'))
const Shipping = React.lazy(() => import('../views/pages/listing/Shipping'))
// const notFound = React.lazy(() => import('../views/errorPages/NotFound'))

const routes = [

    { path: '/', exact: true, name: 'Statistics', component: Statistics },
    { path: '/reviews', exact: true, name: 'Reviews', component: Reviews },
    { path: '/out-of-stock', exact: true, name: 'Out Of Stock', component: OutOfStock },
    { path: '/orders/current-order', exact: true, name: 'Current Order', component: CurrentOrder },
    { path: '/orders/order-detail', exact: true, name: 'Order Detail', component: OrderDetail },
    { path: '/orders/pre-order', exact: true, name: 'Pre Orders', component: PreOrders },
    { path: '/orders/archive-order', exact: true, name: 'Archive Orders', component: ArchiveOrders },
    { path: '/orders/awaiting-acceptance', exact: true, name: 'Awaiting acceptance', component: AwaitingAcceptance },
    { path: '/orders/accepted', exact: true, name: 'Accepted Orders', component: AcceptedOrders },
    { path: '/orders/waiting-for-pickup', exact: true, name: 'Waiting For Pickup Orders', component: WaitingForPickup },
    { path: '/client/database', exact: true, name: 'Client Database', component: Database },
    { path: '/product/products', exact: true, name: 'Products', component: Products },
    { path: '/product/product-detail', exact: true, name: 'Products Details', component: ProductDetail },
    { path: '/product/create-new-item', exact: true, name: 'Create Item', component: CreateItem },
    { path: '/documents', exact: true, name: 'Documents', component: Documents },
    { path: '/contact-us', exact: true, name: 'Contact Us', component: ContactUs },
    { path: '/settings', exact: true, name: 'Settings', component: Settings },
    { path: '/offers', exact: true, name: 'Offers', component: AllOffers },
    { path: '/about-us', exact: true, name: 'About Us', component: AboutUs },
    { path: '/profile/profile', exact: true, name: 'Profile', component: Profile },
    { path: '/profile/opening-hours', exact: true, name: 'Pening Hours', component: OpeningHours },
    { path: '/profile/payment-history', exact: true, name: 'Payment History', component: PaymentHistory },
    { path: '/profile/transaction-ledger', exact: true, name: 'Transaction Ledger', component: TransactionLedger },
    { path: '/create-new-item', exact: true, name: 'Create new item', component: CreateNewItem },
    { path: '/shipping', exact: true, name: 'Shipping', component: Shipping },

]

export default routes