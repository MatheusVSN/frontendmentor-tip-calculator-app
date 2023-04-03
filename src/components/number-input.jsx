export default function NumberInput({ Image, AlternativeText }) {
    return (
        <div className="input-1-color flex items-center h-10">
            <img className="relative left-4" src={Image} alt={AlternativeText} />
            <input className="input-1-color h-full outline-none text-right text-2xl w-full" type="text" name="bill-ammount"></input>
        </div>
    )
}