import { Link } from 'react-router-dom';
import Container from '../Container';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-bg ">
      <Container>
        <div className="h-screen flex flex-col gap-4 items-center justify-center pt-14 sm:pt-10">
          <h1 className="text-[27px] sm:text-4xl lg:text-5xl  text-center lg:leading-normal  text-stone-100 font-bold">
            Organize your tasks <br /> efficiently and boost your productivity
          </h1>
          <h5 className="text-xl md:text-2xl lg:text-3xl text-white 2">
            Manage all your task in one place.
          </h5>
          <button className="bg-stone-100 shadow mt-6 text-primaryColor hover:bg-gradient-to-br from-primaryColor to-[#fc6075] duration-300 hover:text-white font-bold md:text-2xl text-xl md:px-16 px-8 py-2 md:py-4 rounded-full">
            <Link to="/login">Lets Explore</Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
