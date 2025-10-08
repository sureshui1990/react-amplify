import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainList from './main-list';
import { PortalDiv } from './portal';
import { useState } from 'react';

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
    const [userlist, setUserlist] = useState(null)
    const fetchUserList = () => {
        fetch(import.meta.env.VITE_DUMMY_API_URL)
        .then(res => res.json())
        .then(data=> setUserlist(data.users.slice(0,4)));
    }

    useEffect(() => {
        fetchUserList()
    }, []);

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
                            <section>
                                <h3>Dummy user list</h3>
                                {userlist && userlist?.length && <>
                                <ul>
                                    {userlist.map(item => <li key={item.id} style={{margin: '1em 0 2em',borderBottom:'1px solid #f99'}}>
                                        <p>FullName: {item.firstName} {item.lastName}</p>
                                        <p>Age: {item.age}</p>
                                        <p>Email: {item.email}</p>
                                    </li>)}
                                </ul>
                                </>}
                            </section>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}
