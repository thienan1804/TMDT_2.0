//Ex
import React from "react";
import { Button, Input } from "antd";
import { Link, NavLink } from "react-router-dom";
// In
import GlobalFooter from "../../globalComponents/globalFooter/GlobalFooter";
// Style
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);

const LoginPage = () => {
  return (
    <div>
      <div className={cx("login-header")}>
        <div className={cx("header")}>
          <Link to="/">Đặc sản Long An</Link>
          <p>Đăng nhập</p>
        </div>
        <Link to={"/help"}>Bạn cần giúp đỡ ?</Link>
      </div>
      <form className={cx("login-main")}>
        <div className={cx("login-table")}>
          <div className={cx("form-login")}>
            <p>Đăng nhập</p>
            <Input
              placeholder="Email/SĐT/Tên đăng nhập"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className={cx("input-user")}
            />
            <Input.Password
              placeholder="Mật khẩu"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              className={cx("input-password")}
            />
            <Button
              typeof="submit"
              // onClick={onLogin}
              className={cx("btnlogin")}
            >
              <span>Đăng nhập</span>
            </Button>
            <div className={cx("forget-pass")}>
              <Link to="#">{/* Quên mật khẩu */}</Link>
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
