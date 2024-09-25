import React from "react";

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <section className="pt-4">
            {children}
        </section>
    );
};

export default Section;