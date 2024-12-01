import "./styles/Scalable.scss";

const Scalable = () => {
    return (<div className="page scalable-content">
        <img className="background-image" src={require("./bg-images/2.jpg")} alt="bg-images" loading="lazy"/>
        <div className="section-center">
            <h2 className="shadowed-text">SAWY SAWY INITIATIVE</h2>
            <div>IN PARTNERSHIP WITH</div>
        </div>
        <div className="section-left">
            <div className="skewed-content">
                <h3 className="shadowed-text">WORKSHOPS & KITS</h3>
            </div> 
        </div>
        <div className="section-right">
            <div className="skewed-content">
                <h3 className="shadowed-text">MAKER SPACES</h3>
            </div> 
        </div>
    </div>)
}

export default Scalable;