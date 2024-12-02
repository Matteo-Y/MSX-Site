import "./styles/Scalable.scss";

const Scalable = () => {
    return <div className="page">
        <div className="skewed-bento right scalable-bento">
            <div className="grid-el grid-area-1 scalable-el slide-from-top delay-200">
                <img className="skewed-img right background-img" src={require("./bg-images/1.jpeg")} alt="test" loading="lazy"/>
            </div>
            <div className="grid-el grid-area-2 scalable-el slide-from-bottom delay-400">
                <img className="skewed-img right background-img" src={require("./bg-images/2.jpg")} alt="test" loading="lazy"/>
            </div>
            <div className="grid-el grid-area-3 scalable-el slide-from-top delay-600">
                <img className="skewed-img right background-img" src={require("./bg-images/3.jpg")} alt="test" loading="lazy"/>
            </div>
        </div>
    </div>
}

export default Scalable;