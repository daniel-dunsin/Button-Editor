import { useAppProvider } from "@/context";
import React, { FC, useEffect, useState } from "react";
import { Accordion, EditorStyled } from "./Editor.styled";

const Editor: FC<{ sidebar: boolean }> = ({ sidebar }) => {
  const { styles, updateStyles } = useAppProvider();
  const [buttonText, setButtonText] = useState<string>("");
  const [buttonClass, setButtonClass] = useState<string>("");
  const [accordionsOpened, setAccordionsOpened] = useState<number[]>([]);

  const updateButtonText = (value: string): void => {
    setButtonText(value);
    updateStyles("buttonText", value);
  };
  const updateButtonClass = (value: string): void => {
    setButtonClass(value);
    updateStyles("buttonClass", value);
  };
  const toggleAccordion = (index: number) => {
    if (accordionsOpened.includes(index)) {
      setAccordionsOpened((prev) =>
        prev.filter((accord: number) => accord != index)
      );
    } else {
      setAccordionsOpened((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    setButtonClass(styles.buttonClass);
    setButtonText(styles.buttonText);
  }, []);

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

        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(1);
            }}
          >
            <p>Color</p>
            <span>{accordionsOpened.includes(1) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(1) && "open"} color-editor`}
          >
            <input
              type="color"
              color="input-color"
              id="color"
              onChange={(e) => {
                updateStyles("color", e.target.value);
              }}
            />
            <label
              htmlFor="color"
              style={{
                backgroundColor: styles.color,
              }}
            ></label>
          </main>
        </Accordion>
        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(2);
            }}
          >
            <p>Width</p>
            <span>{accordionsOpened.includes(2) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(2) && "open"} sizes-editor`}
          >
            <input
              type="range"
              min={0}
              max={300}
              value={styles.width}
              onChange={(e) => {
                updateStyles("width", e.target.value);
              }}
            />
            <label htmlFor="">{styles.width}px</label>
          </main>
        </Accordion>

        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(3);
            }}
          >
            <p>Height</p>
            <span>{accordionsOpened.includes(3) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(3) && "open"} sizes-editor`}
          >
            <input
              type="range"
              min={0}
              max={175}
              value={styles.height}
              onChange={(e) => {
                updateStyles("height", e.target.value);
              }}
            />
            <label htmlFor="">{styles.height}px</label>
          </main>
        </Accordion>
        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(4);
            }}
          >
            <p>Font Size</p>
            <span>{accordionsOpened.includes(4) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(4) && "open"} sizes-editor`}
          >
            <input
              type="range"
              min={0}
              max={100}
              value={styles.fontSize}
              onChange={(e) => {
                updateStyles("fontSize", e.target.value);
              }}
            />
            <label htmlFor="">{styles.fontSize}px</label>
          </main>
        </Accordion>

        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(5);
            }}
          >
            <p>Font Weight</p>
            <span>{accordionsOpened.includes(5) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(5) && "open"} sizes-editor`}
          >
            <input
              type="range"
              min={100}
              max={700}
              step={100}
              value={styles.fontWeight}
              onChange={(e) => {
                updateStyles("fontWeight", e.target.value);
              }}
            />
            <label htmlFor="">{styles.fontWeight}px</label>
          </main>
        </Accordion>

        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(6);
            }}
          >
            <p>Horizontal Padding</p>
            <span>{accordionsOpened.includes(6) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(6) && "open"} sizes-editor`}
          >
            <input
              type="range"
              min={0}
              max={50}
              value={styles.paddingX}
              onChange={(e) => {
                updateStyles("paddingX", e.target.value);
              }}
            />
            <label htmlFor="">{styles.paddingX}px</label>
          </main>
        </Accordion>

        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(7);
            }}
          >
            <p>Vertical Padding</p>
            <span>{accordionsOpened.includes(7) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(7) && "open"} sizes-editor`}
          >
            <input
              type="range"
              min={0}
              max={50}
              value={styles.paddingY}
              onChange={(e) => {
                updateStyles("paddingY", e.target.value);
              }}
            />
            <label htmlFor="">{styles.paddingY}px</label>
          </main>
        </Accordion>

        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(8);
            }}
          >
            <p>Border</p>
            <span>{accordionsOpened.includes(8) ? "-" : "+"}</span>
          </header>
          <main
            className={`${
              accordionsOpened.includes(8) && "open"
            } border-editor`}
          >
            <div className="border-color-container">
              <label
                htmlFor="border-color"
                style={{ backgroundColor: styles.borderColor }}
              ></label>
              <input
                type="color"
                id="border-color"
                onChange={(e) => {
                  updateStyles("borderColor", e.target.value);
                }}
              />
            </div>
            <div className="border-width-container">
              <input
                type={"range"}
                min={0}
                max={50}
                value={styles.borderWidth}
                onChange={(e) => {
                  updateStyles("borderWidth", e.target.value);
                }}
                className="border-width"
              />
            </div>
          </main>
        </Accordion>

        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(9);
            }}
          >
            <p>Border Radius</p>
            <span>{accordionsOpened.includes(9) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(9) && "open"} sizes-editor`}
          >
            <input
              type="range"
              min={0}
              max={50}
              value={styles.borderRadius}
              onChange={(e) => {
                updateStyles("borderRadius", e.target.value);
              }}
            />
            <label htmlFor="">{styles.borderRadius}px</label>
          </main>
        </Accordion>
        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(10);
            }}
          >
            <p>Box Shadow</p>
            <span>{accordionsOpened.includes(10) ? "-" : "+"}</span>
          </header>
          <main
            className={`${
              accordionsOpened.includes(10) && "open"
            } box-shadow-editor`}
          >
            <div>
              <header>X value</header>
              <div>
                <input
                  type={"range"}
                  min={0}
                  max={30}
                  value={styles.boxShadowX}
                  onChange={(e) => {
                    updateStyles("boxShadowX", e.target.value);
                  }}
                />
                <label htmlFor="">{styles.boxShadowX}px</label>
              </div>
            </div>

            <div>
              <header>Y value</header>
              <div>
                <input
                  type={"range"}
                  min={0}
                  max={30}
                  value={styles.boxShadowY}
                  onChange={(e) => {
                    updateStyles("boxShadowY", e.target.value);
                  }}
                />
                <label htmlFor="">{styles.boxShadowY}px</label>
              </div>
            </div>

            <div>
              <header>Spread Radius</header>
              <div>
                <input
                  type={"range"}
                  min={0}
                  max={30}
                  value={styles.boxShadowSpread}
                  onChange={(e) => {
                    updateStyles("boxShadowSpread", e.target.value);
                  }}
                />
                <label htmlFor="">{styles.boxShadowSpread}px</label>
              </div>
            </div>

            <div>
              <header>Shadow Color</header>
              <div>
                <input
                  type={"color"}
                  onChange={(e) => {
                    updateStyles("boxShadowColor", e.target.value);
                  }}
                  id="box-shadow-color"
                />
                <label
                  htmlFor="box-shadow-color"
                  style={{ backgroundColor: styles.boxShadowColor }}
                ></label>
              </div>
            </div>
          </main>
        </Accordion>

        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(11);
            }}
          >
            <p>Button Text</p>
            <span>{accordionsOpened.includes(11) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(11) && "open"} text-editor`}
          >
            <input
              type="text"
              value={buttonText}
              onChange={(e) => {
                updateButtonText(e.target.value);
              }}
            />
          </main>
        </Accordion>

        <Accordion>
          <header
            onClick={() => {
              toggleAccordion(12);
            }}
          >
            <p>Button Class</p>
            <span>{accordionsOpened.includes(12) ? "-" : "+"}</span>
          </header>
          <main
            className={`${accordionsOpened.includes(12) && "open"} text-editor`}
          >
            <input
              type="text"
              value={buttonClass}
              onChange={(e) => {
                updateButtonClass(e.target.value);
              }}
            />
          </main>
        </Accordion>
      </div>
    </EditorStyled>
  );
};

export default Editor;
