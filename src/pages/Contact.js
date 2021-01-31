import emailjs from 'emailjs-com';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_8AAW7Tg3N47OMQOhyf0xV')
      .then((result) => {
          alert(`Thank you for your message! We'll reach out to you shortly.`);
          var resetter = document.getElementsByClassName('contact-form')[0];
          resetter.reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="container">
      <div> <strong style={{color: "#ad6c3e"}}>Ready to connect?</strong> <br/> <br/>
      Set up a free consultation with us.</div>
      <div>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Please include any services you already know you are interested in</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}