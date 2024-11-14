//Ex
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Input } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import GlobalFooter from "../../globalComponents/globalFooter/GlobalFooter";
//In
import UserAccountType from "../../../data/types/UserAccount/UserAccountType";
// Style
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);

const LoginPage = () => {
  const [login, setLogin] = useState<UserAccountType>({
    email: "",
    password: "",
  });

  const handleOnchangeLoginValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleLoginEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      toast.error("Vui lòng nhập đủ email và password");
      return;
    }
    signInWithEmailAndPassword(auth, login.email, login.password)
      .then(async (userCredential) => {
        const token = await userCredential.user.getIdToken();
        window.localStorage.setItem("accessToken", token);
        navigate("/");
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-email")
          toast.error("Email sai định dạng");
        else toast.error("Đăng nhập thất bại");
      });
  };

  return (
    <div>
      <div className={cx("login-header")}>
        <div className={cx("header")}>
          <Link to="/">Đặc sản Long An</Link>
          <p>Đăng nhập</p>
        </div>
        <Link to={"/help"}>Bạn cần giúp đỡ ?</Link>
      </div>
      <form onSubmit={handleLoginEvent} className={cx("login-main")}>
        <div className={cx("login-table")}>
          <div className={cx("form-login")}>
            <p>Đăng nhập</p>
            <Input
              required
              name="email"
              placeholder="Email/SĐT/Tên đăng nhập"
              value={login.email}
              onChange={handleOnchangeLoginValue}
              className={cx("input-user")}
            />
            <Input.Password
              required
              name="password"
              placeholder="Mật khẩu"
              value={login.password}
              onChange={handleOnchangeLoginValue}
              className={cx("input-password")}
            />
            <Button type="submit" className={cx("btnlogin")}>
              <span>Đăng nhập</span>
            </Button>
            <div className={cx("forget-pass")}>
              <Link to="#"></Link>
              <NavLink to="/dang-nhap-so-dien-thoai">Đăng nhập với SMS</NavLink>
            </div>
            <div className={cx("or-login")}>
              <div className={cx("line")}></div>
              <span>HOẶC</span>
              <div className={cx("line")}></div>
            </div>
            <div className={cx("btn-register")}>
              <span>Bạn chưa có tài khoản ?</span>
              <a href="/dang-ky">Đăng ký</a>
            </div>
          </div>
        </div>
      </form>
      <GlobalFooter />
    </div>
  );
};

export default LoginPage;
