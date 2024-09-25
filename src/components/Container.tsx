import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-screen-xl px-0 mx-auto mt-1 md:px-">
            {children}
        </div>
    );
};

export default Container;
