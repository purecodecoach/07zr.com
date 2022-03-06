import React, { FC, useState } from "react";

interface Props {
    name?: string;
    id?: string;
}

const Checkbox: FC<Props> = ({ name, id }) => {
    const [checked, setChecked] = useState(false);
    return (
        <div onClick={()=>{!id && setChecked(!checked); console.log('clicked')}} style={{ cursor: "pointer", pointerEvents: "all" }}>
            <div
                style={{
                    width: 16,
                    height: 16,
                    border: "1px solid",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {
                    checked && <div
                        style={{
                            borderBottom: "2px solid #000000",
                            borderLeft: "2px solid #000000",
                            width: 11,
                            height: 5,
                            transform: "rotateZ(-45deg) translateX(0px) translateY(-1px)",
                        }}
                    />
                }
            </div>
            <input style={{ display: "none" }} onChange={(event) => {
                setChecked(event.target.checked);
            }} type="checkbox" checked={checked} name={name} id={id} />
        </div>
    );
};

export default Checkbox;