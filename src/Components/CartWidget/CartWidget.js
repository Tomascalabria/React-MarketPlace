import cartImg from '../../media/ShoppingCartIMG.svg'
import loginImg from '../../media/Login-Img.gif'
export const CartWidget =()=>{
    return ( 
    <>
    <div className="login-container">
        <img className="cartIcon" src={cartImg } alt="CartIcon" />      
        
            <div className="login">
                <img className="login-Img" src={loginImg} alt="login " />
                <p> {`Log In`}</p>
            </div>  
            </div>
    </>
    );

}   
