import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/53567181?s=460&u=836888f46fc3bd73bcf153a7618c7c625014d232&v=4" alt="vilson"/>
        <div>
          <strong>Vilson Borges</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada. 
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. 
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;