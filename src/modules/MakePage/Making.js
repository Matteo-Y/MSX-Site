import './styles/Making.scss';

const Making = () => {
    return <div className="page">
        <div className="skewed-bento left making-bento">
            <div className="grid-el grid-area-1 make-el slide-from-bottom delay-200">
                <img className="skewed-img left background-img" src={require("./bg-images/17.jpg")} alt="image" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">STRATEGIZE</h3>
                </div>
            </div>
            <div className="grid-el grid-area-2 make-el slide-from-bottom delay-400">
                <img className="skewed-img left background-img" src={require("./bg-images/53.jpg")} alt="image" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">DESIGN</h3>
                </div>
            </div>
            <div className="grid-el grid-area-3 make-el slide-from-bottom delay-600">
                <img className="skewed-img left background-img" src={require("./bg-images/22.jpg")} alt="image" loading="lazy"/>
                <div className="skewed-div left">
                    <h3 className="shadowed-text margin-auto title-small">EXECUTE</h3>
                </div>
            </div>
        </div>
    </div>
}

export default Making;