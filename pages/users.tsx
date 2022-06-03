import { Typography } from "@mui/material";
import React from "react";
import MyTable from "../components/Table";
import { prisma } from "../db";
import Layout from "../components/Layout";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface Users {
    users:[User];
}

const users: React.FC<Users> = (props) => {
  return (
    <Layout>
      <MyTable users={props.users} />
    </Layout>
  );
};

export default users;

export const getServerSideProps = async () => {
  const users = await prisma.user.findMany();
  return {
    props: {
      users: users,
    },
  };
};
