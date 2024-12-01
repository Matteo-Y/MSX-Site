import './styles/Landing.scss';
import Banner from '../DefaultBanner/Banner';
import { useState } from 'react';
import Making from '../MakePage/Making';
import Experiences from '../ExpPage/Experiences';
import Scalable from '../ScalePage/Scalable';
import Impact from '../ImpactPage/ImpactPage';
import Everyone from '../EveryonePage/Everyone';

const LandingPage = () => {
  const toggleHeaderTrigger = (trigger) => { setHeaderTriggered(trigger) }
  const [headerTriggered, setHeaderTriggered] = useState(false);
  const [page, setPage] = useState(<Banner HeaderCallback={toggleHeaderTrigger}/>);

  const pageChange = (changeKey) => {
    if(changeKey !== 0) setHeaderTriggered(true)
    if(changeKey === 0) {setHeaderTriggered(false); setPage(<Banner HeaderCallback={toggleHeaderTrigger}/>);}
    else if(changeKey === 1) setPage(<Making/>);
    else if(changeKey === 2) setPage(<Impact/>);
    else if(changeKey === 3) setPage(<Scalable/>);
    else if(changeKey === 4) setPage(<Experiences/>);
    else if(changeKey === 5) setPage(<Everyone/>);
  };

 
  return (
    <div className="landing-page">
      <header className="sticky-header">
        <h1 className={headerTriggered ? "animated" : ""} onClick={() => pageChange(0)}>
          MSX
        </h1>
      </header>
      {page}
      <div className="landing-nav">
        <button className="underline-anim nav-button" onClick={() => {pageChange(1)}}> MAKING </button>
        <button className="underline-anim nav-button" onClick={() => {pageChange(2)}}> IMPACTFUL </button>
        <button className="underline-anim nav-button" onClick={() => {pageChange(3)}}> SCALABLE </button>
        <button className="underline-anim nav-button" onClick={() => {pageChange(4)}}> EXPERIENCES </button>
        <p>FOR</p>
        <button className="underline-anim nav-button" onClick={() => {pageChange(5)}}> EVERYONE </button>
      </div>
    </div>
  );
};

export default LandingPage;
