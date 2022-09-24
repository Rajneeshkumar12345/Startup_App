import React from 'react'

const Navbar = () => {
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <nav className="navbar navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="https://d1fdloi71mui9q.cloudfront.net/zy83xe4StuJvJAfeIbx4_OhvqnAzI4B7mj3Xv" alt="" width="40" height="40" class="d-inline-block align-text-center mx-1"/>
                Atom
                </a>

                <div className="d-flex gap-2">
                <button class="btn btn-primary" type="button">Sign up</button>
                <button class="btn btn-primary" type="button">Login</button>
                </div>
            </div>
      </nav>
     </div>
  )
}

export default Navbar

