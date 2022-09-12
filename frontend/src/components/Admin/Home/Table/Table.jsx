import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function TableForm() {
  const rows = [
    {
      id: 1,
      product: "Mints - Striped Red",
      img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Cilka Stut",
      date: "9/7/2021",
      amount: "$2.95",
      method: "cash on delivery",
      status: "Pending",
    },
    {
      id: 2,
      product: "Snapple Raspberry Tea",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Shelli Aldritt",
      date: "10/24/2021",
      amount: "$8.63",
      method: "Online payment",
      status: "Success",
    },
    {
      id: 3,
      product: "Butter - Pod",
      img: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Licha Elderbrant",
      date: "11/9/2021",
      amount: "$4.12",
      method: "cash on delivery",
      status: "Success",
    },
    {
      id: 4,
      product: "Mangostein",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Slade Blore",
      date: "4/13/2022",
      amount: "$9.49",
      method: "Online payment",
      status: "Pending",
    },
    {
      id: 5,
      product: "Meldea Green Tea Liquor",
      img: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Zacherie Fishleigh",
      date: "4/10/2022",
      amount: "$5.89",
      method: "cash on delivery",
      status: "Success",
    },
    {
      id: 6,
      product: "Venison - Ground",
      img: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Agnesse Joriot",
      date: "4/7/2022",
      amount: "$9.51",
      method: "Online payment",
      status: "Pending",
    },
    {
      id: 7,
      product: "Veal - Tenderloin, Untrimmed",
      img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Rube Kaygill",
      date: "7/28/2022",
      amount: "$7.18",
      method: "cash on delivery",
      status: "Success",
    },
    {
      id: 8,
      product: "Cheese - Provolone",
      img: "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Manon Tunnah",
      date: "12/17/2021",
      amount: "$3.54",
      method: "Online payment",
      status: "Pending",
    },
    {
      id: 9,
      product: "Water - Spring 1.5lit",
      img: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Harmonia Chuck",
      date: "3/9/2022",
      amount: "$3.66",
      method: "Online payment",
      status: "Success",
    },
    {
      id: 10,
      product: "Bread - Hamburger Buns",
      img: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Verile Lowrey",
      date: "5/10/2022",
      amount: "$2.24",
      method: "cash on delivery",
      status: "Pending",
    },
  ];

  return <div className="table">
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell' >Tracking ID</TableCell>
            <TableCell className='tableCell' >Product</TableCell>
            <TableCell className='tableCell' >Customer</TableCell>
            <TableCell className='tableCell' >Date</TableCell>
            <TableCell className='tableCell' >Amount</TableCell>
            <TableCell className='tableCell' >Payment Methode</TableCell>
            <TableCell className='tableCell' >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='tableCell' >{row.id}</TableCell>
              <TableCell className='tableCell' >
                <div className="cellWrapper">
                  <img src={row.img} alt="the user pic" className='image' />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell' >{row.customer}</TableCell>
              <TableCell className='tableCell' >{row.date}</TableCell>
              <TableCell className='tableCell' >{row.amount}</TableCell>
              <TableCell className='tableCell' >{row.method}</TableCell>
              <TableCell className='tableCell' >
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>;
}

export default TableForm;