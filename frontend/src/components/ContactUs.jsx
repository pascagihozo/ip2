import React from 'react';
// import './ContactUs.css';
import Navigation from './Navigation';
import Footer from './Footer';

const ContactUs = () => {
    return(

       <div className='contaicontainer bg-black text-white rounded-lg'>
             <Navigation />

                <div className='ContactUs'>
                     <h2>Contact Us</h2>
                     <form>
                        <div className='formData'>
                            <label htmlFor='name'>Name</label>
                            <input type  ="text" id='name'/>
                        </div>
                        <div className='formInput'>
                            <label htmlFor='email'>Email</label>
                            <input type  ="email" id='email'/>
                        </div>
                        <div className='formInput'>
                            <label htmlFor='message'>Message</label>
                            <textarea id='mesage' name='message'></textarea>
                        </div>
                        <div className='formInput'>
                            <label htmlFor='date'>Date</label>
                            <input type  ="date" id='date'/>
                        </div>
                        <button type ="submit">Submit</button>
                     </form>
                </div>

                <Footer />

       </div>

    );
};
export default ContactUs;