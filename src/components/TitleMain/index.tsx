import React from 'react'

interface Iprops {
    text: string,
    color: string
    fontWeight?: number;
}

function TitleMain(props: Iprops) {
    const { text, color, fontWeight = 500 } = { ...props }
    const styledH2 = {
        color: color,
        fontWeight: fontWeight,
}


return (
    <>
        <h2 style={styledH2}>{text}</h2>
    </>
);
};

export default TitleMain