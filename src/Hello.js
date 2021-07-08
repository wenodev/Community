import React from 'react';

function Hello({color, name, isSpecial}){
    return <div style={{color}}>
        {isSpecial ? <b>*</b> : null}
        Hello {name}
        {false}
        {undefined}
        {0}
        </div>
}

Hello.defaultProps = {
    name : '이름없음'
}

export default Hello;
