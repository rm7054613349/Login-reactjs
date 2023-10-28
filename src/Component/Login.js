import React from 'react'
import logo from '../img/log.svg';
import ragister from '../img/register.svg';



import './Login.css';

const Login =() => 
{
  return (
    
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Login</h2>

            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Login Id" />
            </div>

            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>

           

            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Don't have an account ? <a href='#'><h5 className='h'>Ragister Here</h5></a></p>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Login
            </button>
          </div>
          <img src={logo} class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Login 
            </button>
          </div>
          <img src={ragister} class="image" alt="" />
        </div>
      </div>
    </div>



  )
}

export default Login
