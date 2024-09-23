import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="container px-4 mx-auto lg:px-2">
            {children}
        </div>
    );
};

export default Container;