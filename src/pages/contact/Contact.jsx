import React from 'react'

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { FiSend } from 'react-icons/fi';

import "./contact.css";

const Contact = () => {

  const [result, setResult] = React.useState("Envoyer le message");

  const sendMessage = async (event) => {
    event.preventDefault();
    setResult("Envoi du mail....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fc586082-2182-4c48-82d5-38cc6d3743d2");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Message envoyé", res);
      setResult(res.message);
    } else {
      console.log("Erreur lors de l'envoi", res);
      setResult(res.message);
    }
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
      Me <span>Contacter</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Ne soyez pas timide !</h3>

          <p className="contact__description">
           Si vous avez des questions ou envisagez une collaboration, je suis à votre disposition.<br /><br /> N'hésitez pas à me contacter pour discuter de vos projets, de toute opportunité où vous pensez que mes compétences pourraient vous être utiles, ou si vous souhaitez en savoir plus sur moi.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className="info__title">Envoyez-moi un mail</span>
                <h4 className="info__desc">brice.durand8@orange.fr</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className="info__title">Appelez-moi</span>
                <h4 className="info__desc">06 02 06 99 07</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            {/* <a href="#" className="contact__social-link">
              <FaFacebookF />
            </a>*/}

            {/* <a href="#" className="contact__social-link">
              <FaTwitter />
            </a>*/}

            {/* <a href="#" className="contact__social-link">
              <FaYoutube/>
            </a>*/}

            <a href="https://www.linkedin.com/in/brice-durand-6903712a7/" className="contact__social-link" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form onSubmit={sendMessage} className="contact__form">
        <div className="form__input-group">
            <div className="form__input-div">
              <input 
               type="text"
               name="Name"
               placeholder='Votre Nom'
               className='form__control'
               required
              />
            </div>

            <div className="form__input-div">
              <input 
               type="email"
               name="Email"
               placeholder='Votre Email'
               className='form__control'
               required
              />
            </div>

            <div className="form__input-div">
              <input 
               type="text"
               name="Subject"
               placeholder='Votre Sujet'
               className='form__control'
               required
              />
            </div>
          </div>

          <div className="form__input-div">
              <textarea 
               placeholder='Votre Message' 
               name="Message"
               className="form__control textarea"
               required>
              </textarea>
            </div>

            <button className='button'>
              {result}
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact