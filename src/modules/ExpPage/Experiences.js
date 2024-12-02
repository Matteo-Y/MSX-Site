import './styles/Experiences.scss';

const Experiences = () => {
    return <div className="page">
        <div className="skewed-bento left exp-bento">
            <div className="grid-el grid-area-1 exp-grid slide-from-bottom delay-200">
                <img className="skewed-img left background-img" src={require("./images/5.jpg")} alt="thing 1" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">PROJECTS</h3>
                </div>
            </div>
            <div className="grid-el grid-area-2 exp-grid slide-from-top delay-400">
                <img className="skewed-img left background-img" src={require("./images/center.jpg")} alt="thing 1" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">EVENTS</h3>
                </div>
            </div> 
            <div className="grid-el grid-area-3 exp-grid slide-from-bottom delay-600">
                <img className="skewed-img left background-img" src={require("./images/73.jpg")} alt="thing 1" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">SPACES</h3>
                </div>
            </div>
        </div>
    </div>
}

export default Experiences