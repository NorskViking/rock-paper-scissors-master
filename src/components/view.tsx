import React, { ReactElement } from 'react';

interface Props {
    children: ReactElement;
}

const DisplayWrapper = (props: Props) => {
    const { children } = props;

    return (
        <div>
            {children}
        </div>
    );
};

export default DisplayWrapper;