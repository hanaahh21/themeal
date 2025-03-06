import '../style/shimmer1.css';

const Shimmer1=()=>{
    return(
     <div className="shimmer1">
        <div className="shimmer1-search">
        <div className="shimmer1-input">
           
        </div>
        <div className="shimmer1-button">
           
        </div>
        </div>
        <div className="shimmer1-body">
            <div className="lastest-heading"> </div>
            <div className="shimmer1-latest">
                {Array(10)
                .fill("")
                .map((e, index) => (
                <div className="shimmer1-card" key={index}>
                
                </div>
            ))}
            </div>
            <div className="lastest-heading"> </div>
            <div className="shimmer1-random">
                {Array(10)
                    .fill("")
                    .map((e, index) => (
                    <div className="shimmer1-card" key={index}>
                    
                    </div>
                ))}
            </div>
        </div>
     </div>
    )
}

export default Shimmer1;