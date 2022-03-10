import React from 'react'

const Statistics = React.lazy(() => import('../views/pages/home/Statistics'))
const Reviews = React.lazy(() => import('../views/pages/home/Reviews'))
const OutOfStock = React.lazy(() => import('../views/pages/home/OutOfStock'))
const CurrentOrder = React.lazy(() => import('../views/pages/order/CurrentOrders'))
const OrderDetail = React.lazy(() => import('../views/pages/order/OrderDetail'))
const PreOrders = React.lazy(() => import('../views/pages/order/PreOrders'))
// const notFound = React.lazy(() => import('../views/errorPages/NotFound'))

const routes = [

    { path: '/', exact: true, name: 'Statistics', component: Statistics },
    { path: '/reviews', exact: true, name: 'Reviews', component: Reviews },
    { path: '/out-of-stock', exact: true, name: 'Out Of Stock', component: OutOfStock },
    { path: '/current-order', exact: true, name: 'Current Order', component: CurrentOrder },
    { path: '/order-detail', exact: true, name: 'Order Detail', component: OrderDetail },
    { path: '/pre-order', exact: true, name: 'Pre Orders', component: PreOrders },

]

export default routes