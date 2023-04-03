export default function ResetInput({ onClick }) {

    function mouseButton1Click() {
        onClick();
    }

    return (
        <button className={`reset-button input-3-color h-12 max-w-xs rounded text-2xl`} onClick={mouseButton1Click}>RESET</button>
    )
}