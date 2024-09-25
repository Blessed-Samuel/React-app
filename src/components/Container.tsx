import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="px-0 mx-auto mt-0 max-w-viewport md:mt-3 md:pl-0 md:pr-2">
            {children}
        </div>
    );
};

export default Container;
