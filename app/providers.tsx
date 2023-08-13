import React, { FC } from 'react';

interface IProvidersModel {
    children: React.ReactNode;
}

const Providers: FC<IProvidersModel> = ({ children }) => {
    return (
        <div>Providers</div>
    );
};

export default Providers;