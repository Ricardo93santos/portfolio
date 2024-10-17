import React, { useEffect } from "react";
import "../../style/ProfileImage.css";

const ProfileImage: React.FC = () => {

  useEffect(() => {
    const profileImageConatiner = document.querySelector('.profileImage');
    const profileImagePhoto = document.getElementById("photo");
    const profileImageCartoon = document.getElementById("cartoon");


    function hiddenImage() {
      if (profileImageCartoon && profileImagePhoto) {
        profileImageCartoon.classList.add('hiddenImage');
        profileImageCartoon.classList.remove('showImage');
        profileImagePhoto.classList.add('showImage');
        profileImagePhoto.classList.remove('hiddenImage');
      }
    }

    function showImage() {
      if (profileImageCartoon && profileImagePhoto) {
        profileImagePhoto.classList.add('hiddenImage');
        profileImagePhoto.classList.remove('showImage');
        profileImageCartoon.classList.add('showImage');
        profileImageCartoon.classList.remove('hiddenImage');
      }
    }

    if (profileImageConatiner) {
      profileImageConatiner.addEventListener('mouseenter', hiddenImage);
      profileImageConatiner.addEventListener('mouseleave', showImage);
    }

    return () => {
      if (profileImageConatiner) {
        profileImageConatiner.removeEventListener('mouseenter', hiddenImage);
        profileImageConatiner.removeEventListener('mouseleave', showImage);
      }
    }

  }, []);


  return (
    <div className="profileImage">
      <img className="hiddenImage" id="photo" src="https://media.licdn.com/dms/image/v2/D4D03AQHynDl0BNBfGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686515034641?e=1730937600&v=beta&t=xFsr6H55cSsN2UjwDFvmqzDY8Pbjmydt1jWsDLGYvcA" alt="Foto do Perfil" />
      <img id="cartoon" src="https://i.postimg.cc/7Pfc7Gb5/profile-cartoon.png" alt="Foto do Perfil" />
  </div>
  )
}


export default ProfileImage;