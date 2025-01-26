import { useCallback, useEffect, useState } from "react"
import VerticalBar from "./components/verticalBar"
import ContentArea from "./components/contentArea"

function App() {
  useEffect(() => {
    document.title = "Background Changer Project"
  }, [])

  const [bgColor, setBgColor] = useState("#40E0D0")
  const [headingText, setHeadingText] = useState("Turquoise")
  const [description, setDescription] = useState("A calming mix of blue and green, where the ocean meets the sky.")

  const handleClickEvent = useCallback((colorValue, textValue, descValue) => {
    setBgColor(colorValue)
    setHeadingText(textValue)
    setDescription(descValue)
  }, [bgColor, headingText, description])

  return (
    <>
      <div className="w-screen h-screen flex duration-200" style={{ backgroundColor: bgColor }}>
        {/* Vertical Bar */}
        <VerticalBar onButtonClick={handleClickEvent} />
        {/* Content Area  */}
        <ContentArea heading={headingText} desc={description} />
      </div>
    </>
  )
}

export default App