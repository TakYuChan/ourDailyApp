import React from "react";
import S from "./withPreloader.style";

// const WithPreloader = (WrappedComponent) => ({isLoading, ...otherProps}) => {
//     return isLoading ? (
//         <S.Container>it is loading</S.Container>
//     ) : <WrappedComponent {...otherProps} />
// }

const WithPreloader = () => {
    return (<S.Container></S.Container>);
    
}

export default WithPreloader;