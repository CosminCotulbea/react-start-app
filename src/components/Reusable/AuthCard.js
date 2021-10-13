import React from 'react';
import classNames from 'classnames';
import {Card, Container} from 'react-bootstrap';

const AuthCard = (props) => {
    const {title, className, children} = props;

    return <Container fluid className={'auth-wrapper'}>
        <Card className={classNames(className, 'auth-card')}>
            <Card.Body>
                <Card.Title as={'h3'} className={'auth-card-title text-center mb-5'}>{title}</Card.Title>
                <div className={'auth-card-content'}>
                    {children}
                </div>
            </Card.Body>
        </Card>
    </Container>;
}

export default AuthCard;
