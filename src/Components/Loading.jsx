import React from 'react'

const Loading = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{
                display: 'block', shapeRendering: 'auto'
            }} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
                <rect x="38.5" y="38.5" width="11" height="11" fill="#4400ba">
                    <animate attributeName="fill" values="#9a6af8;#4400ba;#4400ba" keyTimes="0;0.25;1" dur="1.5384615384615383s" repeatCount="indefinite" begin="0s" calcMode="discrete"></animate>
                </rect><rect x="50.5" y="38.5" width="11" height="11" fill="#4400ba">
                    <animate attributeName="fill" values="#9a6af8;#4400ba;#4400ba" keyTimes="0;0.25;1" dur="1.5384615384615383s" repeatCount="indefinite" begin="0.3846153846153846s" calcMode="discrete"></animate>
                </rect><rect x="38.5" y="50.5" width="11" height="11" fill="#4400ba">
                    <animate attributeName="fill" values="#9a6af8;#4400ba;#4400ba" keyTimes="0;0.25;1" dur="1.5384615384615383s" repeatCount="indefinite" begin="1.1538461538461537s" calcMode="discrete"></animate>
                </rect><rect x="50.5" y="50.5" width="11" height="11" fill="#4400ba">
                    <animate attributeName="fill" values="#9a6af8;#4400ba;#4400ba" keyTimes="0;0.25;1" dur="1.5384615384615383s" repeatCount="indefinite" begin="0.7692307692307692s" calcMode="discrete"></animate>
                </rect>
            </svg >
        </>
    )
}

export default Loading