import React from "react";
import COLORS from "../Background/Window/colors";
import LANGUAGE from "../Background/Window/modes";
import BackgroundColorInput from "./BackgroundColorInput/BackgroundColorInput";
import Button from "./Button/Button";
import "./header.css";
import SelectInput from "./SelectInput/SelectInput";
import NumberInput from "./NumberInput/NumberInput";

const Header = ({
  allGIFFramesCaptured,
  backgroundColor,
  colors,
  exportingGIF,
  frameDuration,
  language,
  onExport,
  onRecord,
  padding,
  setBackgroundColor,
  setColors,
  setFrameDuration,
  setLanguage,
  setPadding,
}) => {
  const recordButtonText =
    exportingGIF || allGIFFramesCaptured ? "Saving" : "Export GIF";
  return (
    <div className="header-container">
      <header className="header">
        <div className="header__part">
          <SelectInput
            name="Colors"
            value={colors}
            onChange={setColors}
            options={COLORS}
          />
          <NumberInput name="Padding" value={padding} onChange={setPadding} />
          <NumberInput
            name="Frame Duration"
            value={frameDuration}
            onChange={setFrameDuration}
          />
          <SelectInput
            name="Language"
            value={language}
            onChange={setLanguage}
            options={Object.keys(LANGUAGE)}
          />
          <BackgroundColorInput
            value={backgroundColor}
            onChange={setBackgroundColor}
          />
          <div className="buttons">
            <Button type="export" onClick={onExport}>
              Export PNG
            </Button>
            <Button
              type="record"
              onClick={onRecord}
              disabled={exportingGIF || allGIFFramesCaptured}
            >
              {recordButtonText}
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
