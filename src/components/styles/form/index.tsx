import React, { FC } from "react";
import styled from "styled-components";

interface FormProps {
    children?: any;
    onFinish?: (value: any) => void;
}

const Form: FC<FormProps> = ({ children, onFinish }) => {

    const submitHandler = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let entries: any = {};
        for (let [key, value] of formData.entries()) {
            entries[key] = value;
        }
        if (onFinish) {
            onFinish(entries);
        } else {
            console.log(entries);
        }
    };


    return (
        <form onSubmit={submitHandler}>
            {children}
        </form>
    );
};

const FormItem = styled.div`
  margin-bottom: 24px;
`;

export { FormItem };
export default Form;