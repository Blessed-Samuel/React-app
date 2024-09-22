import React from 'react';

interface ButtonProps {
    cta: string;
    count: number;
    logo: string;
    Pcolor?: string;
}

const Button: React.FC<ButtonProps> = ({ cta, count, logo, Pcolor }) => {
    return (
        <>
            <button className={Pcolor}>
                {cta} - ${count}
            </button>
            <img src={logo} alt="logo" />
        </>
    );
};

const Apps: React.FC = () => {
    return (
        <>
            <Button cta="Start Now" count={1000} logo="https://example.com/logo.png" Pcolor="bg-blue-500" />
            <Button cta="Get Started" count={3000} logo="https://example.com/logo.png" Pcolor="bg-red-500" />
        </>
    );
};

export default Apps;
