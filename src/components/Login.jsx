import "../components/style.css"

export const Login = () => {
    return (
    <>
<div class="sidenav">
    <div class="container text-center">
        <div class="row">
            <div class="col align-self- lg-8 ">
                <img class="img-fluid" src="/src/img/logo1.jpg" />
            </div>
            <div class="text-down-logo">
                <h3>Bienvenido</h3>
                <p>Ingresa tus datos, o registrate.</p>
            </div>
        </div>
    </div>
    </div>
    <div class="main">
        <div class="col-md-6 col-sm-12">
            <div class="login-form">
            <form>
                <div class="form-group">
                    <label>User Name</label>
                    <input type="text" class="form-control" placeholder="User Name"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-black">Login</button>
                <button type="submit" class="btn btn-secondary">Register</button>
            </form>
            
            </div>
        </div>
    </div>
    </>
    )
}