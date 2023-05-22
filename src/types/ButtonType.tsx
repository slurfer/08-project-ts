
interface ButtonType {
    onClick?: (event: any) => void;
    type: "submit"| "button" | "reset" | undefined;
    children: any;
}


export default ButtonType;