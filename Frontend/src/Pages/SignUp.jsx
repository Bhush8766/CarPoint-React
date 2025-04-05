import React from 'react'


const SignUp = () => {
    
  return (
    <>
     <center>
     <div className="form1">
     <form>
      <table>
        <tr>
          <td>
          <img src="./src/img/signup1.jpg" alt="" />
          </td>

          <td className='td1'>
        
        <label htmlFor="">Name </label>
        <br />
        <input type="text" placeholder='Enter your Name'/>
        <br />
        <br />
        <label htmlFor="">Email </label>
        <br />
        <input type="email" placeholder='Enter your email'/>
        <br />
        <br />
        <label htmlFor="">Mobile No </label>
        <br />
        <input type="tel" placeholder='Enter your Mobile No'/>
        <br />
        <br />
        <label htmlFor="">Password </label>
        <br />
        <input type="password" placeholder='Enter your password'/>
        <br />
        <br />
        <label htmlFor="">City </label>
        <br />
        <input type="text" placeholder='Enter your City'/>
        <br />
        <br />
        <label htmlFor="">State </label>
        <br />
        <input type="text" placeholder='Enter your State'/>
        <br />
        <br />
        <label htmlFor="">Zip Code </label>
        <br />
        <input type="text" placeholder='Enter your Zip code'/>
        <br />
        <br />
        <button className='btn'>SignUp</button>
      
       

          </td>
        </tr>
      </table>
        </form>
        </div>
        </center>
    </>
  )
}

export default SignUp