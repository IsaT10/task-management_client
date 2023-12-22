import Container from '../../components/Container';

const About = () => {
  return (
    <Container>
      <section class="py-28 md:py-36 ">
        <div class="container mx-auto">
          <div class="text-center flex flex-col items-center font-josep">
            <h3 className="bg-primaryColor px-4 md:px-6 py-1 md:text-base text-sm  -rotate-6 text-white font-gloria">
              About Us
            </h3>
            <h5 className="text-2xl md:text-3xl font-bold mt-2">
              Why Choose Us
            </h5>
            <p class="text-gray-600 leading-normal mt-8 text-lg ">
              Welcome to Your Task Manager, where productivity meets simplicity.
              We understand the challenges of managing tasks efficiently, and
              that's why we've created a platform that empowers individuals and
              teams to stay organized, focused, and on top of their work.
            </p>
            <p class="text-gray-600 leading-normal mt-6 text-lg">
              At Your Task Manager, we believe in the power of effective task
              management to unlock greater productivity and success. Our mission
              is to provide a user-friendly and feature-rich environment that
              caters to the diverse needs of professionals, creatives, and teams
              across various industries.
            </p>
            <p class="text-gray-600 leading-normal mt-6 text-lg">
              What sets us apart is our commitment to simplicity without
              compromising functionality. We strive to make task management
              intuitive, enjoyable, and, most importantly, a catalyst for
              achieving your goals. Join us on this journey towards a more
              organized and productive future!
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
