import { useEffect, useState } from "react";

import { getUserById } from "../api/user";

const useGetFollowersDtl = (arr) => {
  const [followerDtlList, setFollowerDtlList] = useState([]);

  let followerList = [];
  useEffect(() => {
    const getFolwDtl = async () => {
      arr?.map(async (id) => {
        const res = await getUserById(id);

        followerList.push(res);
        if (followerList.length === arr.length) {
          setFollowerDtlList(followerList);
        }
      });
    };
    getFolwDtl();
  }, []);
  return { followerDtlList };
};

export default useGetFollowersDtl;
