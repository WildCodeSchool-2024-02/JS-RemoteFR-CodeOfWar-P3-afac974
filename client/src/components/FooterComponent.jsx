import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import tiktok from "../assets/images/tiktok.png";
import twitter from "../assets/images/twitter.png";

function Footer() {
  return (
    <footer className="footercomponent_footer">
      <div className="footercomponent_content">
        <p>©opyright 2024 VirtuArt.</p>
        <ul className="footercomponent_social_icons">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img
                src={facebook}
                alt="Facebook"
                className="footer_social_icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="footer_social_icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              <img src={tiktok} alt="TikTok" className="footer_social_icon" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter" className="footer_social_icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
