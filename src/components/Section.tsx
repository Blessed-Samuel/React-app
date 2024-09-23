import React from "react";

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <section className="py-8 lg:py-16">
            {children}
        </section>
    );
};

export default Section;