import * as React from "react";
import MaterialTable from "material-table";

const columns = [
  { title: "First Name", field: "firstName" },
  { title: "Last Name", field: "lastName" },
  { title: "Email Address", field: "email" },
  { title: "Phone Number", field: "phoneNumber" },
];

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export default function MyTable(props: { users: [UserData] }) {
  const data = props.users.map((user) => ({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
  }));

  return <MaterialTable columns={columns} title="List of Users" data={data} />;
}
