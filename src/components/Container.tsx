import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="w-11/12 px-0 mx-auto mt-0 md:mt-3 md:pl-0">
            {children}
        </div>
    );
};

export default Container;
