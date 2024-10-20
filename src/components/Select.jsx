import React, { useId,  forwardRef} from "react";

const Select = ({ options, label, className = "", ...props }, ref) => {
  const id = useId();

  return (
    <div className="w-full">
        {label && <label htmlFor={id} className=""></label>}
        <select className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} ref={ref} id={id} {...props}>
            {options?.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))} {/*Maps only if there are values */}
        </select>
    </div>
  );
};

export default forwardRef(Select);
