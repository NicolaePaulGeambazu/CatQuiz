import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
import { LoaderContainer } from './Components.style'

function Loader() {
  return (
    <LoaderContainer>
        <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  )
}

export default Loader