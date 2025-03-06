import '../style/shimmer3.css';

const Shimmer3=()=>{
    
    return (
     <div className="shimmer3">
      {Array(5)
                .fill("")
                .map((e, index) => (
                <div className="shimmer3-card" key={index}>
                  <div className="shimmer3-img"> </div>
                  <div className="shimmer3-info"> 
                    <div className="shimmer3-heading"> </div>
                    <div className="shimmer3-icon"> </div>
                  </div>
                </div>
            ))}
     </div>
    )
}

export default Shimmer3;