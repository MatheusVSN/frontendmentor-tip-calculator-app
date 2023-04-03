export default function NumberInput({ Image, AlternativeText, onKeyDown, ActiveState, onInput }) {

    function onKeyPressed(event) {
        onKeyDown(event)
    }

    function onInputChange(event) {
        onInput(event)
    }

    return (
        <div className="input-1-color flex items-center h-10">
            <img className="relative left-4" src={Image} alt={AlternativeText} />
            <input className={`rounded input-1-color h-full text-right text-2xl w-full ${ActiveState != null ? `outline outline-2 outline-red-600` : "outline-none"}`} type="text" name="bill-ammount" onKeyDown={onKeyPressed} onInput={onInputChange}></input>
        </div>
    )
}