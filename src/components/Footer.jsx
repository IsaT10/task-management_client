import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import {
  FaFacebook,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import Container from './Container';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-bg">
      <Container>
        <div className=" pt-6">
          <div className="flex md:flex-row flex-col gap-6 justify-between items-center ">
            <div className="flex gap-6 text-stone-100 font-semibold text-sm  md:text-base">
              <p className="cursor-pointer">About</p>
              <p className="cursor-pointer">Contact</p>
              <p className="cursor-pointer">Blogs</p>
              <p className="cursor-pointer">Becaome an author</p>
            </div>
            <div className="flex gap-6 md:gap-3 text-stone-100 text-3xl">
              <Link
                className="cursor-pointer"
                to="/https://www.facebook.com/rakibUddinIshaT/"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                className="cursor-pointer"
                to="/https://www.instagram.com/i_s_a_t_/"
              >
                <AiFillInstagram />
              </Link>
              <Link
                className="cursor-pointer"
                to="/https://www.linkedin.com/in/rakibuddinisat/"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          <h3 className="text-center text-xl sm:text-2xl text-stone-100 font-bold my-4 sm:my-10">
            OrganizeHub
          </h3>
          <p className="text-center text-stone-100 text-sm">
            Copyright © by{' '}
            <span className=" font-semibold text-red-200">Rakib Uddin</span>.
            All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
