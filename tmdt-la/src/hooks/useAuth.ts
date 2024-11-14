import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import UserAccountType from "../data/types/UserAccount/UserAccountType";

function useAuth() {
  const [user, setUser] = useState<UserAccountType[] | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<String | undefined>(
    undefined
  );
  const token: string | null = window.localStorage.getItem("accessToken");

  useEffect(() => {
    if (token == null) {
      setUser(undefined);
      setErrorMessage("Cần đăng nhập trước mới có thể vào trang này");
    }

    if (token != null) {
      const fetchUsers = async (
        page: number = 1,
        users: UserAccountType[] = []
      ): Promise<void> => {
        try {
          const config = {
            method: "GET",
            url: `${process.env.REACT_APP_API_BASE_URL}users?order=ASC&page=${page}&take=10`,
            headers: { Authorization: `Bearer ${token}` },
          };

          const response: AxiosResponse = await axios(config);
          const newUsers: UserAccountType[] = response.data;
          const allUsers = [...users, ...newUsers];

          if (newUsers.length === 10) {
            // Assuming 10 is the page size, continue fetching if the current page is full
            return fetchUsers(page + 1, allUsers);
          } else {
            setUser(allUsers);
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            setUser(undefined);
            setErrorMessage(error.response?.data.message);
          }
        }
      };

      fetchUsers();
    }
  }, [token]);

  return [user, errorMessage];
}

export default useAuth;
