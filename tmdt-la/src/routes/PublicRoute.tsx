import { Outlet, Navigate } from "react-router-dom";
import UserAccountType from "../data/types/UserAccount/UserAccountType";
import useAuth from "../hooks/useAuth";
import { UserContext } from "../hooks/useContext";
import LoadingPage from "../presentations/globalComponents/loading/LoadingPage";
const PublicRoute = (props: { path: string }) => {
  const [user, errorMessage] = useAuth();
  if (user === undefined && errorMessage === undefined) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <LoadingPage />
      </div>
    );
  }

  if (user !== undefined) {
    return (
      <UserContext.Provider value={user as UserAccountType}>
        <Navigate to={props.path} replace />
      </UserContext.Provider>
    );
  } else {
    return <Outlet />;
  }
};

export default PublicRoute;
