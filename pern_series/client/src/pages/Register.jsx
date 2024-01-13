import React from 'react'

function Register() {


  const handleSubmit = (e)=>{
    e.preventDefault();
    
  }
  return (
    <section>
      <main>
        <div className='section-registration'>
          <div className='container grid grid-two-cols'>
            <div className='registration-image'>
              <img src="./images/register.jpg" alt="registration image" width="500" height="500"/>
            </div>
            <div className='registration-form'>
              <h1 className='main-heading mb-3'>registration form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input type="text" name='username' placeholder='username' id='username' required autoComplete='off'/>
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name='email' placeholder='email' id='email' required autoComplete='off'/>
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" name='password' placeholder='password' id='password' required autoComplete='off'/>
                </div>
                <div>
                  <label htmlFor="contact number">contact number</label>
                  <input type="number" name='contact number' placeholder='contact number' id='contact number' required autoComplete='off'/>
                </div>
                <br />
                <button type='submit' className='btn btn-submit'>Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section> 
    )
}

export default Register