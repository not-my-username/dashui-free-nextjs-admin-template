// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';

// import required data files
import StudentsData from "data/dashboard/StudentsData";

const ActiveProjects = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Student Overview</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Name</th>
                                <th>Points</th>
                                <th>Priority</th>
                                <th>Badges</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {StudentsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className={`border p-2 rounded-1`}>
                                                        {item.avatar}
                                                    </div>
                                                </div>
                                                <div className="ms-3 lh-1">
                                                    <h5 className=" mb-1">
                                                        <Link href="#" className="text-inherit">{item.name}</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{item.points}</td>
                                        <td className="align-middle"><span className={`badge bg-${item.priorityBadgeBg}`}>{item.priority}</span></td>
                                        <td className="align-middle">
                                            <div className="avatar-group">
                                                {item.badges.map((avatar, avatarIndex) => {
                                                    return (
                                                        <span className="avatar avatar-sm" key={avatarIndex}>
                                                            <Image alt="avatar" src={avatar.image} className="rounded-circle" />
                                                        </span>
                                                    )
                                                })}
                                                <span className="avatar avatar-sm avatar-primary">
                                                    <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="align-middle text-dark">
                                            <div className="float-start me-3">{item.progress}%</div>
                                            <div className="mt-2">
                                                <ProgressBar now={item.progress} style={{ height: '5px' }} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">View All Students</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default ActiveProjects