import { useRouteError } from "react-router-dom";
import '../style/error.css';

const Error=()=>{
    const err=useRouteError();
    return (
        <div className="error">
          <h1 className="status">{err.status}</h1>
          <h2 className="statustext">{err.statusText}</h2>
        </div>
         
    )
}

export default Error;