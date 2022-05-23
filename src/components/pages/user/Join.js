import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { user } from 'recoil/state/UserState';
import { Alert } from "react-bootstrap";
import { contentSelector } from 'recoil/state/ContentState';
import { lazy } from 'react';

const axios = require('axios');

function Join() {
    const navigate = useNavigate();
    const [userState, setUserState] = useRecoilState(user);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const setContentState = useSetRecoilState(contentSelector);

    const emailDom = useRef();
    const passwordDom = useRef();

    function loadPage(url) {
        setContentState(lazy(() => import('components/pages/' + url)));
    }

    const handleValidation = ( password) => {
        let formIsValid = true;
        if (!password.match(/^(?!.*[ㄱ-힣])(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)(?=.{8,})/)) {
            formIsValid = false;
            setPasswordError(
                "비밀번호는 8자 이상의 영문자, 숫자, 특수문자가 조합된 문자열이어야 합니다."
            );
            return false;
        } else {
            setPasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const joinSubmit = (e) => {
        e.preventDefault();
        const email = emailDom.current.value;
        const password = passwordDom.current.value;

        if (handleValidation(password)) {
            axios({
                method: 'post',
                url: '/api/join',
                data: {
                    "email" : email,
                    "password" : password
                }
              })
              .then(function () {
                loadPage('user/Login.js');
              })
              .catch(function (error) {
                setEmailError(error.response.data.data.msg); 
              });
              
        }
    };

    return (
        <main role="main">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <Alert variant={'info'}>
                            회원가입 하시겠어요?
                        </Alert>
                        <form id="loginform" onSubmit={joinSubmit} className="mt-3">
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    ref={emailDom}
                                    type="email"
                                    className="form-control mt-2"
                                    id="EmailInput"
                                    name="EmailInput"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                                <small id="emailHelp" className="text-danger form-text">
                                    {emailError}
                                </small>
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    ref={passwordDom}
                                    type="password"
                                    className="form-control mt-2"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                                <small id="passworderror" className="text-danger form-text">
                                    {passwordError}
                                </small>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Join;