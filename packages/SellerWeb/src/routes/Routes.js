import React from 'react'
import Database from '../views/pages/clients/components/Database'
const Statistics = React.lazy(() => import('../views/pages/home/Statistics'))
const Reviews = React.lazy(() => import('../views/pages/home/Reviews'))
const OutOfStock = React.lazy(() => import('../views/pages/home/OutOfStock'))
const CurrentOrder = React.lazy(() => import('../views/pages/order/CurrentOrders'))
const OrderDetail = React.lazy(() => import('../views/pages/order/OrderDetail'))
const PreOrders = React.lazy(() => import('../views/pages/order/PreOrders'))
const ArchiveOrders = React.lazy(() => import('../views/pages/order/Archive'))
const Products = React.lazy(() => import('../views/pages/products/components/Products'))
const ProductDetail = React.lazy(() => import('../views/pages/products/components/ProductDetail'))
const CreateItem = React.lazy(() => import('../views/pages/products/components/CreateItem'))
const AllOffers = React.lazy(() => import('../views/pages/offers/AllOffers'))
const Documents = React.lazy(() => import('../views/pages/Documents'))
const ContactUs = React.lazy(() => import('../views/pages/ContactUs'))
const Settings = React.lazy(() => import('../views/pages/Settings'))
const Profile = React.lazy(() => import('../views/pages/profile/Profile'))
// const notFound = React.lazy(() => import('../views/errorPages/NotFound'))

const routes = [

    { path: '/', exact: true, name: 'Statistics', component: Statistics },
    { path: '/reviews', exact: true, name: 'Reviews', component: Reviews },
    { path: '/out-of-stock', exact: true, name: 'Out Of Stock', component: OutOfStock },
    { path: '/current-order', exact: true, name: 'Current Order', component: CurrentOrder },
    { path: '/order-detail', exact: true, name: 'Order Detail', component: OrderDetail },
    { path: '/pre-order', exact: true, name: 'Pre Orders', component: PreOrders },
    { path: '/archive-order', exact: true, name: 'Archive Orders', component: ArchiveOrders },
    { path: '/client/database', exact: true, name: 'Client Database', component: Database },
    { path: '/product/products', exact: true, name: 'Products', component: Products },
    { path: '/product/product-detail', exact: true, name: 'Products Details', component: ProductDetail },
    { path: '/product/create-new-item', exact: true, name: 'Create Item', component: CreateItem },
    { path: '/documents', exact: true, name: 'Documents', component: Documents },
    { path: '/contact-us', exact: true, name: 'Contact Us', component: ContactUs },
    { path: '/settings', exact: true, name: 'Settings', component: Settings },
    { path: '/offers', exact: true, name: 'Offers', component: AllOffers },
    { path: '/profile', exact: true, name: 'Profile', component: Profile },

]

export default routes