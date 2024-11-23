import React, { useState } from "react";
import { json , NavLink} from "react-router-dom";
const Signup=()=>{
  //const history = useHistory();
  const [user, setUser] = useState({
    name:"", email:"", phone:"", work:"", password:"", cPassword:""
  })
  //let name, value;
  const handleInputs= (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setUser((prevUser)=>({...prevUser, [name]:value}))
  }
  const postData =async (e)=>{
    e.preventDefault();
    const {name, email, phone, work, password, cPassword}=user;
    const res= await fetch("/register", {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({//stringify:server doesnot understand json format
        name, email, phone, work, password, cPassword
      })
    });
    const data= await res.json();
    if(res.status === 401 || !data){
      window.alert("invalid registration");
      console.log("invalid registration");
    }else{
      window.alert("registration successfully");
      console.log("registration successfully");
     // history.push("/login");
    }
  }
  return(
    <div>
<form method="POST">
<div className="form-group">
    <label>Name</label>
    {/* <input type="text" value={user.name} onChange={handleInputs} id="name" name="name"/> */}
    <input type="text" className="form-control" value={user.name} onChange={handleInputs} id="name" name="name"  placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control"  value={user.email} onChange={handleInputs} id="email" name="email" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label >Phone</label>
    <input type="email" className="form-control" value={user.phone} onChange={handleInputs} id="phone" name="phone" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label >Profession</label>
    <input type="email" className="form-control" value={user.work} onChange={handleInputs} id="work" name="work" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" value={user.password} onChange={handleInputs} id="password" name="password" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label>COnfirm Password</label>
    <input type="email" className="form-control" id="cPassword" name="cPassword" value={user.cPassword} onChange={handleInputs} aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <button type="submit" name="signup"  id="signup" onClick={postData} className="btn btn-primary">Submit</button>
</form>    </div>
  )

}
export default Signup