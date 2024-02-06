import { useEffect, useState } from "react";

import { getUserById } from "../util/user";

const useGetUserDtl = (arr) => {
  const [userDtlList, setUserDtlList] = useState([]);

  let userList = [];
  useEffect(() => {
    const getUserDtl = async () => {
      arr?.map(async (id) => {
        const res = await getUserById(id);

        userList.push(res);
        if (userList.length === arr.length) {
          setUserDtlList(userList);
        }
      });
    };
    getUserDtl();
  }, []);
  return { userDtlList };
};

export default useGetUserDtl;
