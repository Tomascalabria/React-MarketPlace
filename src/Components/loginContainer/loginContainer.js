import loginImg from '../../media/Login-Img.gif'    



export const LoginContainer = ()=>{
    return ( 
    <>
         <div className="login-container">
            <div className="login">
                <img className="login-Img" src={loginImg} alt="login " />
                <p> Log In</p>
                </div>
            </div>  
            
            
    </>
    )   
}