import { SlLike } from "react-icons/sl";

interface Props {
    active: boolean;
}

const LikeBtn = styled.SlLike<Props>`
background-color: ${(props) => props.active ? "red" : "none"}
`;


function Like() {
    return <LikeBtn active= />
}

export default Like