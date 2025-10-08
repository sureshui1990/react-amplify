import React from 'react';
import MainNav from './main-nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainList from './main-list';
import { PortalDiv } from './portal';

const mockdata = [
    {
        name: 'suresh',
        id: 123,
        data: [
            {
                name: 'cricket',
                id: 'cri123',
                list: [
                    {
                        tool: 'bat',
                        place: 'ground'
                    }
                ]
            },
            {
                name: 'bike trip',
                id: 'bike123',
                list: [
                    {
                        tool: 'bike -himalayan',
                        place: 'road'
                    }
                ]
            },
            {
                name: 'car trip',
                id: 'car123',
                list: [
                    {
                        tool: 'zest honda',
                        place: 'bodimettu'
                    }
                ]
            },
            {
                name: 'call taxi',
                id: 'taxi123',
                list: [
                    {
                        tool: 'call taxi',
                        place: 'muntal'
                    }
                ]
            },
            {
                name: 'train1',
                id: 'train123',
                list: [
                    {
                        tool: 'train vehicle',
                        place: 'thanjai'
                    }
                ]
            }
        ]
    },
    {
        name: 'vignesh',
        id: 1234,
        data: [
            {
                name: 'football',
                id: 'football123',
                list: [
                    {
                        tool: 'foot ball',
                        place: 'ground'
                    }
                ]
            },
            {
                name: 'car trip',
                id: 'car1233',
                list: [
                    {
                        tool: 'vendo',
                        place: 'madurai'
                    }
                ]
            },
            {
                name: 'call taxii',
                id: 'taxi1234',
                list: [
                    {
                        tool: 'call taxi',
                        place: 'muntal'
                    }
                ]
            },
            {
                name: 'train14',
                id: 'train12334',
                list: [
                    {
                        tool: 'train vehicle f',
                        place: 'thanjai'
                    }
                ]
            }
        ]
    }
];

export default function Sidebar() {
    return (
        <div>
            <div className='main-container'>
                <Container fluid>
                    <Row>
                        <Col xs={2} className='sidebar'>
                            <h2>Logo</h2>
                            <nav className='menu position-relative'>
                                <MainList mockdata={mockdata} />
                                <PortalDiv />
                            </nav>
                        </Col>
                        <Col xs={10} className='content-container'>
                            <h2>Content</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptatum perferendis nisi doloribus magnam quibusdam quod sunt labore ut. Ea possimus quas vel fugit doloribus amet officiis ut sunt consequuntur.</p>

                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}
