import React, { useEffect } from "react";
import "../../style/Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  useEffect(() => {
    const profileImageContainer = document.querySelector('.profileImage');
    const profileImagePhoto = document.getElementById('photo');
    const profileImageCartoon = document.getElementById('cartoon');

    function hideImage() {
      if (profileImageCartoon) {
        profileImageCartoon.style.display = "none";
      }
      if (profileImagePhoto) {
        profileImagePhoto.style.display = "block";
      }
    }

    function showImage() {
      if (profileImageCartoon) {
        profileImageCartoon.style.display = "block";
      }
      if (profileImagePhoto) {
        profileImagePhoto.style.display = "none";
      }
    }

    if (profileImageContainer) {
      profileImageContainer.addEventListener('mouseenter', hideImage);
      profileImageContainer.addEventListener('mouseleave', showImage);
    }

    return () => {
      if (profileImageContainer) {
        profileImageContainer.removeEventListener('mouseenter', hideImage);
        profileImageContainer.removeEventListener('mouseleave', showImage);
      }
    };
  }, []);

  return (
    <section className="container">
      <div className="home_text">
        <h1>Bem-vindo a um novo universo digital!</h1>
        <h2>Eu sou Ricardo Santos</h2>
        <p>Transformo ideias em interfaces intuitivas e atraentes.</p>
        <div className="home_contact">
          <Link to="https://wa.me/+5577933016666?text=Olá%20Ricardo,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!%20Vamos%20conversar?" target="_blank" rel="noopener noreferrer">
            <button className="whatsappButton" aria-label="Me chama no WhatsApp">Me chama no WhatsApp</button>
          </Link>
          <Link to="/contact">
            <button className="contactButton" aria-label="Preencha o Formulário">Preencha o Formulário</button>
          </Link>
        </div>
      </div>
      <div className="profileImage">
        <img id="photo" src="https://media.licdn.com/dms/image/v2/D4D03AQHynDl0BNBfGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686515034641?e=1730937600&v=beta&t=xFsr6H55cSsN2UjwDFvmqzDY8Pbjmydt1jWsDLGYvcA" alt="Foto do Perfil" style={{ display: 'none' }} />
        <img id="cartoon" src="https://i.postimg.cc/7Pfc7Gb5/profile-cartoon.png" alt="Foto do Perfil" />
      </div>
    </section>
  );
}

export default Home;