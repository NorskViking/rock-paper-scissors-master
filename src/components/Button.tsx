import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    styles: string;
    onClose: () => any;
}

const Button = ({ children, styles, onClose }: Props) => {
    return (
        <>
            <button className={styles} onClick={onClose}>
                {children}
            </button>
        </>
    )
}

export default Button;
