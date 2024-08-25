import React from 'react';

interface Props {
    children: React.ReactNode,
    color: string
    handleClick: () => void
}

const Button = ({color, children, handleClick}:Props) => {
    return (
        <div>
            <button
                className={color +` text-white px-5 py-2 rounded`}
                type="button"
                onClick={() => {handleClick()}}
                >
                {children}
            </button>
        </div>
    );
};

export default Button;