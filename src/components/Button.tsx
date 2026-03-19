interface Props {
  children: string;
  color?: string;
  handleClick: () => void;
}

function Button({ children, color="primary", handleClick }: Props) {
  return (
    <button className={"btn btn-" + color} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
