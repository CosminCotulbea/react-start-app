import React, {useState} from "react";
import AuthCard from "../Reusable/AuthCard";
import {Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import {FaLock, FaLockOpen, FaUser} from 'react-icons/fa';
import {useDispatch} from "react-redux";
import {loginUser} from "../../state/user/reducer";
import {useTranslation} from "react-i18next";

const Login = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation(['login']);
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        remember: false
    });

    const _login = (e) => {
        e.preventDefault();
        dispatch(loginUser(user));
    };

    const changeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });
    }

    return <>
        <AuthCard title={t('login:title')}>
            <Form onSubmit={_login} className={'mb-3'}>
                <Form.Group>
                    <InputGroup className="mb-4 auth-input-group">
                        <Form.Control type="email"
                                      name="email"
                                      value={user.email}
                                      onChange={changeHandler}
                                      placeholder={'email'}/>
                        <InputGroup.Text><FaUser/></InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <InputGroup className="mb-4 auth-input-group">
                        <Form.Control type={showPassword ? 'text' : 'password'}
                                      name="password"
                                      autoComplete="on"
                                      value={user.password}
                                      onChange={changeHandler}
                                      placeholder={'password'}/>
                        <InputGroup.Text onClick={() => {
                            setShowPassword(!showPassword)
                        }}>
                            {showPassword ? <FaLockOpen/> : <FaLock/>}
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <div className="custom-checkbox text-end">
                        <Form.Check.Label className={'me-1'} htmlFor="remember-me">{'Remember'}</Form.Check.Label>
                        <Form.Check.Input id="remember-me"
                                          name="remember"
                                          type="checkbox"
                                          className={'custom-checkbox-input'}
                                          label={'Remember'}
                                          checked={user.remember}
                                          onChange={changeHandler}/>
                    </div>
                </Form.Group>
                <Button type={'submit'} onClick={_login}>{'Login'}</Button>
            </Form>
            <Row>
                <Col sm={6} className={'text-sm-start text-center'}>
                    <Card.Link href={'/register'} className={'auth-link'}>{'Register'}</Card.Link>
                </Col>
                <Col sm={6} className={'text-sm-end text-center'}>
                    <Card.Link href={'/forgot'} className={'auth-link'}>{'Forgot password'}</Card.Link>
                </Col>
            </Row>
        </AuthCard>
    </>;
};

export default Login;
