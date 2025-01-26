import React from 'react'

function VerticalBar({ onButtonClick }) {
    return (
        <div className="w-40 bg-gray-800 flex flex-col justify-center items-center space-y-4">
            {/* Buttons  */}
            <button className="w-25 h-12 rounded-full text-black focus:ring-4" style={{ backgroundColor: "#FF7F50" }} onClick={() => onButtonClick("#FF7F50", "Coral", "A soft and warm orange-pink hue, like a sunset kiss.")}> Coral </button>
            <button className="w-25 h-12 rounded-full text-black focus:ring-4" style={{ backgroundColor: "#E6E6FA" }} onClick={() => onButtonClick("#E6E6FA", "Lavender", "A delicate shade of light purple, like a flower in bloom.")}> Lavender </button>
            <button className="w-25 h-12 rounded-full text-black focus:ring-4" style={{ backgroundColor: "#50C878" }} onClick={() => onButtonClick("#50C878", "Emerald", "A rich and vibrant green, echoing nature's freshest hues.")}> Emerald </button>
            <button className="w-25 h-12 rounded-full text-black focus:ring-4" style={{ backgroundColor: "#DC143C" }} onClick={() => onButtonClick("#DC143C", "Crimson", "A bold, deep red with a touch of elegance, like a velvety evening sky.")}> Crimson </button>
            <button className="w-25 h-12 rounded-full text-black focus:ring-4" style={{ backgroundColor: "#FFBF00" }} onClick={() => onButtonClick("#FFBF00", "Amber", "A warm and glowing golden-orange, reminiscent of a sunset's last rays.")}> Amber </button>
            <button className="w-25 h-12 rounded-full text-black focus:ring-4" style={{ backgroundColor: "#0F52BA" }} onClick={() => onButtonClick("#0F52BA", "Sapphire", "A deep, royal blue that stands out, like the midnight sky.")}> Sapphire </button>
            <button className="w-25 h-12 rounded-full text-black focus:ring-4" style={{ backgroundColor: "#FFDAB9" }} onClick={() => onButtonClick("#FFDAB9", "Peach", "A soft, warm blend of pink and orange, like the glow of a sunrise.")}> Peach </button>
        </div>
    )
}

export default VerticalBar
