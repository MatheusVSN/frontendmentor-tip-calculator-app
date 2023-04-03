export default function CustomTipInputComponent({ onClick, onInput }) {

    function onMouseButton1Click() {
        if (onClick) {
            onClick()
        }
    }

    function onInputChanged(event) {
        onInput(event.target.value)
    }


    return (
        <input className="input-1-color h-10 rounded outline-none text-right placeholder:text-center placeholder:text-2xl text-2xl max-[350px]:text-lg max-[350px]:placeholder:text-lg" onClick={onMouseButton1Click} onInput={onInputChanged} placeholder="Custom"></input>
    )
}