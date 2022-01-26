import React, { useContext } from 'react';
import * as yup from 'yup';
import { Form, Field, Formik } from 'formik';
import Input from '../../components/input/Input';
import Wrapper from '../../components/wrapper/Wrapper';
import usersApi from '../../api/usersApi';
import useAsyncProcess from '../../core/network/async-process/useAsyncProcess';
import AppContext from '../../core/context/AppContext';
import Button from '../../components/button/Button';
import { User } from '../../api/usersApiModels';
import './login.css';

const validationSchema = yup.object({
    username: yup.string().required('Username is required*'),
    password: yup.string().required('Password is required*'),
});

function Login() {
    const { runAsyncProcess: runLoginAsyncProcess } = useAsyncProcess<User>();
    const { dispatchAppStateAction: dispatchAppStateAction } = useContext(AppContext);
    return (
        <Wrapper className="login-form__wrapper">
            <div className="login-form__container">
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    onSubmit={async (data) => {
                        try {
                            const response = await runLoginAsyncProcess(
                                usersApi.login({
                                    username: data.username,
                                    password: data.password,
                                }),
                            );
                            // window.location.reload();
                            console.log(response);
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors }) => (
                        <Form className="login-form__middle">
                            {errors.username ? (
                                <p style={{ color: 'red' }} className="login-form__middle--error">
                                    {errors.username}
                                </p>
                            ) : (
                                ''
                            )}
                            <Field placeholder="Username" name="username" as={Input} />
                            {errors.password ? (
                                <p style={{ color: 'red' }} className="login-form__middle--error">
                                    {errors.password}
                                </p>
                            ) : (
                                ''
                            )}
                            <Field placeholder="Password" name="password" type="password" as={Input} />

                            <div className="login-form__footer">
                                <Button type="submit">login</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Wrapper>
    );
}

export default Login;
