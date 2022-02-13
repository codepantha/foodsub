import React from "react";
import "./Footer.css";
//import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import tw from "../../assets/tw.png";
import ln from "../../assets/ln.png";
import logo from "../../assets/foodsub3.png";

const Footer = () => {
  return (
    <footer>
     <div className="foodsub__footer bg-black white">
     <div className="foodsub__footer-about">
     <img src={logo} width="150" height="28"/>
        <p className="pa3 pl0 about">
          A faster and cheaper alternative <br/>to cooking for busy Africans
        </p>
        <div className="foodsub__footer-about_icons">
          <a href="instagram.com/foodsubs.africa"><img src={ig} style={{marginRight: '10px'}}/></a>
        
         <a href="twitter.com/foodsubHQ" target="blank"> <img src={tw} style={{marginRight: '10px'}}/></a>
          <a href="Linkedin.com/foodsubhq" target="blank"><img src={ln} /></a>
        </div>
        </div>
       
      
      <div className="foodsub__footer-contactus">
        <p className="f4">Contact us</p>
        <p className="mv3"><a href="#" className="no-underline white pa dim">hello@foodsub.africa</a></p>
        <p className="mv3"><a href="tel:+234090111111" className="no-underline white pa dim">+234(0)7068138588</a></p>
        <p className="mv3 white">Lagos, Nigeria</p>
      </div>
    
   </div>
     <div className="foodsub__footer-copy-right bg-black white">  <p className="mt3">&copy; 2022 Food Subcription for Africans. All Rights Reserved</p></div>
    </footer>
  );
};

//<!--Start of Tawk.to Script-->

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61ed65399bd1f31184d8d8fc/1fq3l6qqh';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
//</script>
//End of Tawk.to Script-->

export default Footer;
