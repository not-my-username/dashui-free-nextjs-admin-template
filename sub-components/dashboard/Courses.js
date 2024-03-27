// import node module libraries
import React from "react";
import Link from 'next/link';
import { Card, Table, Dropdown, Image, ProgressBar } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

// import required data files
import ActiveCourses from "data/dashboard/ActiveCourses";

const Teams = () => {

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        (<Link
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="text-muted text-primary-hover">
            {children}
        </Link>)
    ));

    CustomToggle.displayName = 'CustomToggle';

    const ActionMenu = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <MoreVertical size="15px" className="text-muted" />
                </Dropdown.Toggle>
                <Dropdown.Menu align={'end'}>
                    <Dropdown.Item eventKey="1">
                        Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                        Something else here
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    return (
        <Card className="h-100">
            <Card.Header className="bg-white py-4">
                <h4 className="mb-0">Courses</h4>
            </Card.Header>
            <Table responsive className="text-nowrap">
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Progress</th>
                        <th>Due By</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ActiveCourses.map((item, index) => {
                        return (
                            <tr key={index} className="p-10">
                                <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            {item.icon}
                                        </div>
                                        <div className="ms-3 lh-1">
                                            <h5 className=" mb-1">{item.name}</h5>
                                            <p className="mb-0">{item.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">
                                <div className="float-start me-3">{item.progress}%</div>
                                            <div className="mt-2">
                                                <ProgressBar now={item.progress} style={{ height: '5px' }} />
                                            </div></td>
                                <td className="align-middle">{item.dueData}</td>
                                <td className="align-middle">
                                    <ActionMenu />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Card>
    )
}

export default Teams