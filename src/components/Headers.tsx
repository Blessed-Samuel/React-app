import React from 'react';
import Section from './Section';
import Container from './Container';

interface HeaderProps {
    title: string;
    bodyText: string;
}

const Headers: React.FC<HeaderProps> = ({ title, bodyText }) => {
    return (
        <>
            <Section>
                <Container>
                    <div className='mt-4 lg:flex-row md:mt-6'>
                        <div className='mb-8 text-white'>
                            <h1 className='pb-4 text-header2 lg:text-4xl'>{title}</h1>
                            <p className='text-center lg:leading-custom-200 text-header1 text-Brandwhite90 md:w-11/12 font-extralight lg:text-left'
                            >
                                {bodyText}
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

        </>
    );
}

export default Headers;
