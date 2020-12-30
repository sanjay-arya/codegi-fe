import './Footer.css'
import Service from './Service'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-header">
        Let’s have a chat
      </div>
      <div className="footer-service clearfix">
        <Service title="Build" desc="Help you build something"/>
        <Service title="Co-incubate" desc="Co-incubate an idea together"/>
        <Service title="Customize" desc="Customise a solution for your business"/>
        <Service title="Organize" desc="Organise learning sessions with us"/>
      </div>
      <div className="social-icons">
          <a href="https://www.facebook.com/codigo.co/" target="_blank" className="social-item">
            <img width="12" height="22" src="https://www.codigo.co/img/icons/social-facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com/CodigoApps" target="_blank" className="social-item">
            <img width="23" height="18" src="https://www.codigo.co/img/icons/social-twitter.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/hellocodigo/" target="_blank" className="social-item">
            <img width="21" height="19" src="https://www.codigo.co/img/icons/social-instagram.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/company/codigo-pte-ltd" target="_blank" className="social-item">
            <img width="20" height="20" src="https://www.codigo.co/img/icons/social-linkedIn.svg" alt="" />
          </a>
			  </div>
          <div class="body--14 text--center">Copyright © Codigo - Mobile App Developer Singapore</div>
          <div class="body--14 text--center footer__contact">+65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971</div>
    </footer>
  )
}
