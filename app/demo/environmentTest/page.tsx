import React, { FC } from 'react';

interface IEnvUseModel {}

const EnvUse: FC<IEnvUseModel> = () => <div>{process.env.TEST}</div>;

export default EnvUse;
