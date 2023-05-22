interface InputInterface {
    type: "text"|"number"|"date";
    onChange: (event: any) => void;
    value: string;
}

export default InputInterface;