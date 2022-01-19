import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]); //zamiast [] bo te 3 sek. muszą się liczyć od ostaniego kliknięcia a nie od 1-ego
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
