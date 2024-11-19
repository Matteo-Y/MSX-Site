import './styles/Making.scss';

const Making = () => {
    return (<div className="page making-content">
        <img className="background-image" src={require("./bg-images/52-transformed.png")} alt="bg-images"/>
        <div className="section-center">
            <h2 className="shadowed-text">IMBUING YOU WITH <br/> SKILLS <br/> AND <br/> KNOWLEDGE</h2>
        </div>
        <div className="section-left">
            <div className="skewed-content">
                <h3 className="shadowed-text">INSPIRING TO <br/> INSPIRE OTHERS</h3>
            </div> 
        </div>
        <div className="section-right">
            <div className="skewed-content">
                <h3 className="shadowed-text">PREPARING FOR <br/> THE FUTURE</h3>
            </div> 
        </div>
    </div>);
}

export default Making;