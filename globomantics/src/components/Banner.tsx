import { ReactNode } from 'react';
import logo from '../assets/GloboLogo.png';
import styles from './Banner.module.css';

interface BannerProps {
    children: ReactNode;
}

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
};
const Banner = ({children}: BannerProps) => {
    return (
        <header className='row mb-4'>
            <div className='col-5'>
                <img src={logo} alt='logo' className={styles.logo}></img>
            </div>
            <div className='col-7 mt-5' style={subtitleStyle}>{children}</div>
        </header>
    );
}

export default Banner;