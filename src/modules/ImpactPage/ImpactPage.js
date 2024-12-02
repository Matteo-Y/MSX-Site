import "./styles/Impact.scss"

const Impact = () => {
    return <div className="page">
        <div className="skewed-bento right impact-bento">
            <div className="impact-bg1 grid-el grid-area-1 slide-from-left delay-400">
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">MIND BLOWING</h3>
                </div>
            </div>
            <div className="impact-bg2 grid-el grid-area-2 slide-from-left delay-500">
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">AFFECTING <br/> COMMUNITIES</h3>
                </div>
            </div>
            <div className="impact-bg3 grid-el grid-area-3 slide-from-bottom delay-400">
                <div className="skewed-div right">
                    <h3 className="shadowed-text margin-auto title-small">CHANGING LIVES</h3>
                </div>
            </div>
        </div> 
    </div>
}

export default Impact;