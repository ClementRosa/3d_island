import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text,text2, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}<br />{text2}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 mx-5 text-white'>
      Hi, I am <span className='font-semibold'>Clement</span> 👋🏻 <br />A
      Software Engineer from France
    </h1>
  ),
  2: (
    <InfoBox
      text='Worked with many companies '
      text2='and picked up many skills along the way.'
      link='/about'
      btnText='Learn more'
    />
  ),
  3: (
    <InfoBox
      text='Led multiple projects to success over the years.'
      text2="Curious about the impact ?"
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev?"
      text2="I'm just a few keystrokes away"
      link='/contact'
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage, ...props }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
