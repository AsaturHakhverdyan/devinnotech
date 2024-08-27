import React from 'react'

const ErrorModal = ({ isError }: { isError: boolean }) => {
  return (
    <div className={isError ? 'absolute top-10 left-[50%] translate-x-[-50%] flex items-center justify-center bg-blue-800 w-96 h-28 rounded-2xl' : "hidden"}>
      <p>The city not founded</p>
    </div>
  )
}

export default ErrorModal;
