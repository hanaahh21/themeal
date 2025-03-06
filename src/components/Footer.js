import { Icon } from '@iconify/react';
import '../style/footer.css'
import { Link } from 'react-router-dom';

const Footer=()=>{
    return(
       <div className='footer'>
       <div className='social-media'>
            <Link to='https://www.linkedin.com/in/sagar-ray-3a6297225/' target='_blank'><Icon icon="skill-icons:linkedin" className='icon-1' /></Link>
            <Link to='https://github.com/sagarroy707' target='_blank'><Icon icon="mdi:github" className='icon-2'/></Link>
            <Link to='https://www.instagram.com/707_roy/' target='_blank'><Icon icon="skill-icons:instagram" className='icon-3'/></Link>
        </div>
        <div className='copy-right'>
            <p1>
            © 2023 TheMeal<br></br>
            Proudly built in the India by Sagar 
            </p1>
        </div>
       </div>
    )
}

export default Footer;