'use client';
// import PhoneIcon from "../../Images/white-phone-icon.png";
// import LocationIcon from "../../Images/white-location-icon.png";
// import EmailIcon from "../../Images/email-icon.png";
import { useContext, useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const ContactPage = () => {

  const formRef = useRef();
  const [done, setDone] = useState(false);
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

      // handleSubmit using emailjs 
    //   const handleSubmit = (e) => {
    //     e.preventDefault()
    //     emailjs.sendForm(

    //     'service_my20arp', 
    //     'template_j7zva5b', 
    //     formRef.current, 
    //     'user_gA8QSmOG7ld5EfHWWmsof'
    //     )

    //     .then((result) => {
    //         console.log(result.text);
    //         setDone(true);
    //         formRef.current.reset();

    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // }
  return (
    <div className="contact" id="contact-me-section">
            <div className="contact-bg"></div>
            <div  className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Contact me!</h1>

                    {/* Contact information */}
                    <div className="contact-info">
                        <div className="contact-info-item">
                            {/* <img
                                src={PhoneIcon}
                                alt="Phone icon"
                                className="contact-icon"
                            /> */}
                            +1 (479) 601-3157
                        </div>
                        <div className="contact-info-item">
                            {/* <img
                                src={EmailIcon}
                                alt="Email icon"
                                className="contact-icon"
                            /> */}
                            jonjackson.webdesign@gmail.com
                        </div>
                        <div className="contact-info-item">
                            {/* <img
                                src={LocationIcon}
                                alt="Location icon"
                                className="contact-icon"
                            /> */}
                            Fayetteville, AR
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>How can I help?</b> Reach out to me if you want to discuss a role, project 
                        you're working on, or if you just want to say hello and connect! 
                        I look forward to hearing from you!
                    </p>

                    {/* Form to reach out via email */}
                    <form 
                    // ref={formRef} 
                    // onSubmit={handleSubmit}
                    >
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you for your message!"}
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ContactPage






