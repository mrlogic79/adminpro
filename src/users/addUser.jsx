import axios from "axios";
import { useState , useEffect} from "react";
import {  Outlet, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const Adduser = () => {

  const{userId} = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(
    {
      name:'',
      lastname:'',
      username:'',
      email:'',
      address:{
        street:'',
        suite:'',
        city:'',
        zipcode:''
      }
    }
  );
  const addusers=(e)=>{
    e.preventDefault();
    if (!userId) {
      axios.post("https://jsonplaceholder.typicode.com/users" ,data).then(res=>{
        console.log(res);
        swal(` با موفقیت انجام شد  ${res.data.name} افزودن `, {
          icon: "success",
        })
      })
    }else {
    axios.put(`https://jsonplaceholder.typicode.com/users/${userId}` ,data).then(res=>{
      console.log(res);
      swal(` ویرایش  ${res.data.name} با موفقیت انجام شد `, {
        icon: "success",
      })
    })
  }
  }

  useEffect(() => {
    if (userId) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>{
        setData(
          {
            name:res.data.name,
            lastname:res.data.lastname,
            username:res.data.username,
            email:res.data.email,
            address:{
              street:res.data.address.street,
              suite:res.data.address.suite,
              city:res.data.address.city,
              zipcode:res.data.address.zipcode
            }
          }
        )
      })
    }


  },[userId])



    return (
      <div className=" container mt-5 add ">
        <h3 className="text-center mb-4 mt-2">{userId ? ' ویرایش کاربر' : 'افزودن کاربر'}</h3>
        <div className="row justify-content-center ">
          <div className="col-lg-6 col-md-10 col-s-12 adduser">
            <form>
              <div className="form-group">
                <label className="text-right my-1">نام و نام خانوادگی:</label>
                <div className="d-flex ">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="نام"
                    className="form-control mx-2"
                    value={data.name}
                    onChange={(e)=>setData({...data , name:e.target.value})}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="نام خانوادگی"
                    className="form-control mx-2"
                    value={data.lastname}
                    onChange={(e)=>setData({...data , lastname:e.target.value})}
                  />
                </div>
              </div>
  
              <div className="form-group">
                <label className="text-right my-1">نام کاربری:</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={data.username}
                  onChange={(e)=>setData({...data,username:e.target.value})}
                />
              </div>
  
              <div className="form-group">
                <label className="text-right my-1">ایمیل:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={data.email}
                  onChange={(e)=>setData({...data,email:e.target.value})}
                />
              </div>
  
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label className="text-right my-1">آدرس:</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="شهر"
                      value={data.address.city}
                      onChange={(e)=>setData({...data , address:{...data.address , city:e.target.value}})}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="invisible my-1">آدرس</label>
                    <input
                      type="text"
                      name="street"
                      className="form-control mt-md-0 mt-2"
                      placeholder="خیابان"
                      value={data.address.street}
                      onChange={(e)=>setData({...data , address:{...data.address , street:e.target.value}})}
                    />
                  </div>
                </div>
              </div>
  
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="addressLine2"
                      className="form-control"
                      placeholder="ادامه آدرس"
                      value={data.address.suite}
                      onChange={(e)=>setData({...data , address:{...data.address , suite:e.target.value}})}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="postalCode"
                      className="form-control mt-md-0 mt-2"
                      placeholder="کد پستی"
                      value={data.address.zipcode}
                      onChange={(e)=>setData({...data , address:{...data.address , zipcode:e.target.value}})}
                    />
                  </div>
                </div>
              </div>
  
              <div className="form-group text-left">
                {/* <Link to={'/user'}><button type="button" className="btn btn-danger mr-2">بازگشت</button></Link> */}
                <button type="button" className="btn btn-danger mr-2" onClick={()=>navigate('/user')}>بازگشت</button>
                <button onClick={addusers} type="submit" className="btn btn-primary">{userId ? 'ویرایش '  :'افزودن' }</button>
              </div>
            </form>
          </div>
        </div>
        <Outlet/>
      </div>
    );
  };
  
  export default Adduser;
  