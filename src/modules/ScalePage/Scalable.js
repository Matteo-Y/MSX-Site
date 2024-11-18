import "./styles/Scalable.scss";

const Scalable = () => {
    return (<div className="scalable-content">
        <img className="background-image" src={require("./bg-images/2.jpg")} alt="bg-images"/>
        <div className="section-center">
            <h2 className="shadowed-text">1,000 UNITS DISTRIBUTED</h2>
            <div>IN PARTNERSHIP WITH</div>
        </div>
        <div className="section-left">
            <div className="skewed-content">
                <h3 className="shadowed-text">SAWY SAWY</h3>
            </div> 
        </div>
        <div className="section-right">
            <div className="skewed-content">
                <h3 className="shadowed-text">LOCATIONS</h3>
            </div> 
        </div>
    </div>)
}

export default Scalable;