import './styles/Making.scss';

const Making = () => {
    return <div className="page">
        <div className="skewed-bento left making-bento">
            <div className="grid-el grid-area-1 make-el slide-from-bottom delay-200">
                <img className="skewed-img left background-img" src={require("./bg-images/17.jpg")} alt="image" loading="lazy"/>
            </div>
            <div className="grid-el grid-area-2 make-el slide-from-bottom delay-400">
                <img className="skewed-img left background-img" src={require("./bg-images/53.png")} alt="image" loading="lazy"/>
            </div>
            <div className="grid-el grid-area-3 make-el slide-from-bottom delay-600">
                <img className="skewed-img left background-img" src={require("./bg-images/22.jpg")} alt="image" loading="lazy"/>
            </div>
        </div>
    </div>
}

export default Making;