import { Role } from "@/const/role";
import { UserContext } from "@/context/userContext";
import Link from "next/link";
import React, { useContext } from "react";

const Navigation = () => {
  const userContext = useContext(UserContext);
  return (
    <nav>
      <div>
        <Link href={"/"}>ประกาศ</Link>
      </div>
      {userContext?.role === Role.GM ? (
        <div>
          <Link href={"/services/gm"}>GM Service</Link>
        </div>
      ) : (
        <div>
          <Link href={"/service/customer"}>Customer Service</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
