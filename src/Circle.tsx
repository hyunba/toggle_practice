import styled from "styled-components";

// interface ContainerProps {
//     // bgColor: string;
// }

const Container = styled.div`
    width: 200px;
    height: 200px;
    background-color: teal;
`;

// interface CircleProps {
//     bgColor: string;
// }

function Circle() {
    return (
        <div><Container/></div>
    );
}

export default Circle;