export default function SelectorInput({ Percentage, onClick, ActiveState }) {

    function onMouseButton1Click() {
        if (onClick) {
            console.log("click")
            onClick(Percentage)
        }
    }

    return (
        <button className={`input-2-color hover-effect-1 h-10 rounded ${ActiveState == true ? "active-effect-1" : ""}`} onClick={onMouseButton1Click}>{Percentage}%</button>
    )
}