
const checkboxStyling = `
    form-checkbox 
    appearance-none 
    bg-orange-100 
    border-emerald-900 
    checked:bg-emerald-900 
    focus:ring-transparent 
    checked:focus:bg-emerald-900 
    checked:hover:bg-emerald-900 
    checked:focus:ring-offset-0 
    focus:ring-offset-0
    `;


export default function Checkbox({className, onChange}: React.InputHTMLAttributes<HTMLInputElement>) {
    return(
        <input 
        type='checkbox' 
        className={`${className} ${checkboxStyling}`}
        onChange={onChange}
        />
    )
}