import React, { useState } from "react"

import DolarIcon from "../images/icon-dollar.svg"
import PersonIcon from "../images/icon-person.svg"

import CustomTipInputComponent from "../components/custom-tip-input.jsx"
import NumberInputComponent from "../components/number-input.jsx"
import ResetInputComponent from "../components/reset-input.jsx"
import TipInputComponent from "../components/tip-selector-input.jsx"

export default function MainPage() {
    const Percentages = [5, 10, 15, 25, 50];
    const [rating, setRating] = useState(0);
    const [customRating, setCustomRating] = useState(0);
    const [canReset, setCanReset] = useState(false);

    function tipMouseButton1Click(percentage) {
        if (rating == percentage) {
            setRating(0);
        }
        setRating(percentage);
    }

    return (
        <>
            <h1 className="text-center font-bold text-3xl tracking-widest">SPLI<br />TTER</h1>
            <div className="min-[811px]:mb-20 max-[810px]:mb-5"></div>
            {/* Main Container */}
            <div className="main-container p-5 rounded-lg max-[810px]:inline-grid sm:h-full max-[425px]:w-screen max-[425px]:h-screen max-[425px]:grid max-[425px]:place-items-center">
                {/* Input Container */}
                <div className="inline-grid content-center h-full max-w-xs w-80 rounded-lg max-[425px]:w-full min-[811px]:mr-10">
                    {/* Bill Input */}
                    <div className="max-w-xs mb-10">
                        <p className="text-style-1">Bill</p>
                        <NumberInputComponent Image={DolarIcon} AlternativeText={"Dollar Ammount"} />
                    </div>

                    {/* Tip Container */}
                    <div className="max-w-xs mb-10">
                        <p className="text-style-1">Select Tip %</p>
                        <div className="grid grid-cols-3 gap-4">
                            {Percentages.map((index) => (
                                <TipInputComponent key={index} Percentage={index} onClick={tipMouseButton1Click} />
                            ))}
                            <CustomTipInputComponent />
                        </div>
                    </div>

                    {/* Number of People Container */}
                    <div className="max-w-xs min-[426px]:mb-10 min-[811px]:mb-0">
                        <p className="text-style-1">Number of People</p>
                        <NumberInputComponent Image={PersonIcon} AlternativeText={"Number of People"} />
                    </div>
                </div>

                {/* Result Container */}
                <div className="result-container inline-grid h-full p-5 max-w-xs w-80 rounded-lg max-[425px]:w-full">
                    <div className="flex flex-row max-w-xs justify-between relative top-5">
                        <p className="text-left text-white text-sm">Tip Ammount <br /><span className="text-style-2 text-xs">/ Person</span></p>
                        <p className="text-right price text-4xl">$0.00</p>
                    </div>

                    <div className="relative top-5 mt-10"></div>

                    <div className="flex flex-row max-w-xs justify-between">
                        <p className="text-left text-white text-sm">Total <br /> <span className="text-style-2 text-xs">/ Person</span></p>
                        <p className="text-right price text-4xl">$0.00</p>
                    </div>

                    <div className="mb-20"></div>

                    <ResetInputComponent />
                </div>
            </div>
        </>
    )
}