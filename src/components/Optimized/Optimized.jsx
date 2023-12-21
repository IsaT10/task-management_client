import Container from '../Container';
import './Optimized.css';
import developer from '../../assets/developer.png';
import student from '../../assets/student.png';
import professional from '../../assets/professional.png';

const works = [
  {
    title: 'Developer',
    img: developer,
    desc: 'Stay organized with your coding tasks and project timelines.',
  },
  {
    title: 'Professional',
    img: professional,
    desc: 'Efficiently manage your daily work and deadlines.',
  },
  {
    title: 'Student',
    img: student,
    desc: ' Organize study tasks and prioritize activities.',
  },
];

const Optimized = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center mt-20 mb-10">
        <h3 className="bg-primaryColor px-6 py-1 text-xl font-semibold -rotate-6 text-white">
          Benefit
        </h3>
        <h5 className="text-3xl font-bold mt-2">Discover Who Benefits Most</h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center   justify-between my-16">
          {works.map((work, i) => (
            <div
              key={i}
              className="w-full border-2 benefit__content border-primaryColor rounded-2xl p-6 text-center h-full mb-6"
            >
              <img
                src={work.img}
                alt="Developer Icon"
                className="mx-auto mb-3"
                width="64"
                height="64"
              />
              <h3 className="text-xl mb-3 font-semibold">{work.title}</h3>
              <p className=" leading-5 ">{work.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Optimized;
