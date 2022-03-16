import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons'
import {
    Category,
    AddCategory,
} from '../../components/products/Components'

const Products = () => {
    return (
        <>
            <Row>
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="/product/product-detail"
                        categoryName="Burgers"
                        itemNumbers="8"
                    />
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="/product/product-detail"
                        categoryName="Sushi"
                        itemNumbers="8"
                    />
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="/product/product-detail"
                        categoryName="Salads"
                        itemNumbers="8"
                    />
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="/product/product-detail"
                        categoryName="Soups"
                        itemNumbers="8"
                    />
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="/product/product-detail"
                        categoryName="Desserts"
                        itemNumbers="8"
                    />
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="/product/product-detail"
                        categoryName="Drinks"
                        itemNumbers="8"
                    />
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="/product/product-detail"
                        categoryName="Pizza"
                        itemNumbers="8"
                    />
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="/product/product-detail"
                        categoryName="Wok"
                        itemNumbers="8"
                    />
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <AddCategory>
                        <button className="plus"><Plus size={30} /></button>
                        <h2>Add category</h2>
                    </AddCategory>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="#"
                        categoryName="Drafts"
                        itemNumbers="8"
                        classN="grey"
                    />
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="#"
                        categoryName="Listing Template"
                        itemNumbers="8"
                        classN="grey"
                    />
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <Category
                        link="#"
                        categoryName="Customisations Templates"
                        itemNumbers="8"
                        classN="grey"
                    />
                </Col>
            </Row>
        </>
    )
}

export default Products