import React from 'react';
import Container from './Container';

interface CardsProps {
    icon: string;
    title: string;
    subText?: string;
    className?: string;
}

const Cards: React.FC<CardsProps> = ({ icon, title, subText }) => {
    return (
        <>
            <Container>
                <div className='flex flex-col items-center space-y-3 text-center'>
                    <img src={icon} alt="Card-Icons" />
                    <div>
                        <h1 className='pt-6 text-white text-header5'>{title}</h1>
                        <p className='pt-4 text-center font-extralight lg:leading-custom-200 text-header0 text-Brandlemon81'>{subText}</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cards;
