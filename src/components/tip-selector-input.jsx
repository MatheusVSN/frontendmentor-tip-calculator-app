export default function SelectorInput({ Percentage, onClick }) {
    function onMouseButton1Click() {
        if (onClick) {
            onClick(Percentage)
        }
    }

    return (
        <button className="input-2-color hover-effect-1 h-10 rounded" onClick={onMouseButton1Click}>{Percentage}%</button>
    )
}