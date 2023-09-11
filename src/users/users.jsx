import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Users=()=>{
    const [usrers, setusers] = useState([]);
    const [mainUsers, setMainUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/").then(u=>{
            setusers(u.data)
        })
    },[]);

    const trushAlert=(itemId)=>{

        swal({
            title: "حذف آیتم",
            text: `ایا میخواهید آیتم ${itemId} را حذف کنید`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://jsonplaceholder.typicode.com/users/${itemId}`).then(res=>{
                    if(res.status ===200){
                        const newUsers = usrers.filter(u=>u.id != itemId);
                        setusers(newUsers)
                        setMainUsers(mainUsers)
                    }
                })
              swal("آیتم شما با موفقیت حذف شد", {
                icon: "success",
              });
            } else {
              swal("شما از حذف آیتم منصرف شدید");
            }
          });
    }
    const handleChange=(e)=>{
        setusers(mainUsers.filter(u=>u.name.includes(e.target.value)))
      }
    return(
        <div className="container ">
            <h3 className="text-center mt-5">مدیریت کاربران</h3>
            <div className="row my-2 mb-4 justify-content-between w-100 ">
                <div className=" col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleChange}/>
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/user/add">
                    <button className="btn btn-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                    </svg>
                    </button>
                    </Link>
                </div>
            </div>
            {
                usrers.length ? (
                    <table className="table" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>نام کاربری</th>
                        <th>ایمیل</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                   {usrers.map(u=>(
                     <tr key={u.id}>
                     <td>{u.id}</td>
                     <td>{u.name}</td>
                     <td>{u.username}</td>
                     <td>{u.email}</td>
                     <td>
                         <button onClick={()=>trushAlert(u.id)} style={{color:"red"}} className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                              </svg>
                         </button>
                         
                         <button  style={{color:"yellow"}} className="btn" onClick={()=>navigate(`/user/add/${u.id}`)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                              </svg>
                         </button>
                        
                     </td>
                 </tr>
                   )
                   )}
                </tbody>
            </table>   
                ) : (<h4 className="text-center text-warning"> لطفا صبر کنید ...</h4>)
            }
            
        </div>
    )
}

export default Users ;


 





