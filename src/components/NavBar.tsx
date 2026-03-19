interface Props {
    toppings: string;
    onChangeName: () => void;
}

const NavBar = ({ toppings, onChangeName }: Props) => {
    return (
        <>
            <div>NavBar: {toppings}</div>
            <button onClick={onChangeName}>Change Name</button>
        </>
    )
}

export default NavBar;