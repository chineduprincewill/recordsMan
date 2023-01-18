import { HiOutlineOfficeBuilding, HiOutlineMail, HiOutlineDeviceMobile, HiOutlineUser } from "react-icons/hi";
import { MdOutlineTask } from 'react-icons/md'


export const profileDB = (user, setProfile) => {

    const profile =  
    [
      {
        id:0,
        title: "Organization",
        desc: user && (user.groupname === "" ? user.account : user.groupname),
        price: "13.25",
        upOrDown: "down",
        percent: "0.25%",
        icon: <HiOutlineOfficeBuilding className="invest-icon" />,
        },
      {
        id:1,
        title: "Name",
        desc: user && `${user.lastname}, ${user.firstname}`,
        price: " 200.22 ",
        upOrDown: "up",
        percent: "1.04%",
        icon: <HiOutlineUser className="invest-icon" />,
      },
      {
        id:2,
        title: "Email",
        desc: user && `${user.email}`,
        price: "890.00",
        upOrDown: "down",
        percent: "5.04%",
        icon: <HiOutlineMail className="invest-icon" />,
      },
      {
        id:3,
        title: "Mobile",
        desc: user && `${user.mobile}`,
        price: " 58.99 ",
        upOrDown: "up",
        percent: "10.2%",
        icon: <HiOutlineDeviceMobile className="invest-icon" />,
      },
      {
        id:4,
        title: "Role",
        desc: user && `${user.role}`,
        price: "13.25",
        upOrDown: "down",
        percent: "0.25%",
        icon: <MdOutlineTask className="invest-icon" />,
      },
    ];

    setProfile(profile);

}
