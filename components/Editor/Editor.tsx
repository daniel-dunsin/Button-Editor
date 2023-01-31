import { useAppProvider } from "@/context";
import React, { FC, useState } from "react";
import { Accordion, EditorStyled } from "./Editor.styled";

const Editor: FC<{ sidebar: boolean }> = ({ sidebar }) => {
  const { styles, updateStyles } = useAppProvider();
  const [accordionsOpened, setAccordionsOpened] = useState<number[]>([]);
  const toggleAccordion = (index: number) => {
    if (accordionsOpened.includes(index)) {
      setAccordionsOpened((prev) =>
        prev.filter((accord: number) => accord != index)
      );
    } else {
      setAccordionsOpened((prev) => [...prev, index]);
    }
  };
  return (
    <EditorStyled>
      {sidebar && <aside></aside>}
      <div className="editor-container">
        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(0);
            }}
          >
            <p>Background Color</p>
            <span>{accordionsOpened.includes(0) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(0) && "open"} color-editor`}
          >
            <input
              type="color"
              color="input-color"
              id="backgroundColor"
              onChange={(e) => {
                updateStyles("backgroundColor", e.target.value);
              }}
            />
            <label
              htmlFor="backgroundColor"
              style={{
                backgroundColor: styles.backgroundColor,
              }}
            ></label>
          </main>
        </Accordion>
      </div>
    </EditorStyled>
  );
};

export default Editor;
