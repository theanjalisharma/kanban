import React from "react";
const Contact=()=>{
  return(
    <div>
        <div>
          <div>Phone</div>
          <div>9870409684</div>
        </div>
        <div>
          <div>EMAIL</div>
          <div>9870409684</div>
        </div>
        <div>
          <div>address</div>
          <div>9870409684</div>
        </div>
        <form>
        <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Message</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )

}
export default Contact