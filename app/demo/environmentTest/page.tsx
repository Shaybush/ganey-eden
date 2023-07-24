import React, { FC } from 'react'

interface IEnvUseModel {

}

const EnvUse:FC<IEnvUseModel> = () => {
  return (
    <div>{process.env.TEST}</div>
  )
}

export default EnvUse