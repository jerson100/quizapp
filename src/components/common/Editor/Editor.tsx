import { useCallback, useMemo, useState } from "react";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import { AiOutlineFullscreen } from "react-icons/ai";
import { PiBroomBold } from "react-icons/pi";
import clsx from "clsx";
import { memo } from "react";
import CodeBlock from "./components/CodeBlock";

const CustomInput = memo(
  ({
    onChange,
    number: number,
    values,
  }: {
    onChange: (e: any, number: number) => void;
    number: number;
    values: string[] | undefined;
  }) => {
    return (
      <input
        onChange={(e) => onChange(e, number)}
        value={values ? values[number] : ""}
        className="border px-2 border-text-primary rounded-lg h-9 mb-[.5rem] ml-2 mr-2 w-28 text-text-primary shadow-sm shadow-text-primary focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent"
      />
    );
  }
);

interface EditorProps {
  value: string;
  isInput?: boolean;
  onChange?: (value: string) => void;
  valueInputs: string[];
  changeInputs: (value: string, index: number) => void;
  handleClear: () => void;
}

const Editor = ({
  value,
  isInput = false,
  onChange,
  valueInputs,
  changeInputs,
  handleClear,
}: EditorProps) => {
  const [isActiveFullScreen, setIsActiveFullScreen] = useState<boolean>(false);
  const classContainer = clsx(
    "flex flex-col w-full gap-4 bg-[#f7f7f7]",
    isActiveFullScreen
      ? "fixed top-0 left-0 w-full h-full z-50 bg-white p-4"
      : ""
  );

  const handleChangeInput = useCallback(
    (e: any, number: number) => {
      changeInputs(e.target.value, number);
    },
    [changeInputs]
  );

  const processedMarkdown = useMemo(() => {
    let index = 0;
    return isInput
      ? value.replace(/\[\[input\]\]/g, (match: string) => {
          return `<CustomInput number={${index++}} />`;
        })
      : value;
  }, [value, isInput, valueInputs]);

  const markdownoptions: MarkdownToJSX.Options = useMemo(() => {
    return {
      forceBlock: true,
      overrides: {
        code: {
          component: CodeBlock,
        },
        CustomInput: {
          component: CustomInput,
          props: {
            onChange: handleChangeInput,
            values: valueInputs,
          },
        },
      },
    };
  }, [handleChangeInput, valueInputs]);

  return (
    <div className={classContainer}>
      <div className="flex items-center justify-between">
        <label className="font-gordita-bold text-text-primary">Pregunta:</label>
        <div className="flex gap-2">
          <button
            type="button"
            className="bg-text-primary text-white font-gordita-bold rounded-lg  py-2 w-7 h-7 flex items-center justify-center active:scale-110 active:duration-300 transition-all hover:bg-text-primary hover:bg-opacity-70"
            onClick={() => handleClear()}
          >
            <PiBroomBold />
          </button>
          <button
            type="button"
            className="bg-text-primary text-white font-gordita-bold rounded-lg  py-2 w-7 h-7 flex items-center justify-center active:scale-110 active:duration-300 transition-all hover:bg-text-primary hover:bg-opacity-70"
            onClick={() => {
              if (!window.document.body.style.overflowY) {
                window.document.body.style.overflowY = "hidden";
              } else {
                window.document.body.style.overflowY = "";
              }
              //   console.log(window.document.body.style.overflowY);
              setIsActiveFullScreen((prev) => !prev);
            }}
          >
            <AiOutlineFullscreen />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 min-h-[10rem] w-full h-full">
        <textarea
          className="border rounded-lg p-4 font-inter-regular focus:outline-none focus:ring-2 focus:ring-text-primary focus:text-text-primary focus:border-transparent resize-none h-full w-full border-text-primary"
          value={value}
          onChange={(e) => (onChange ? onChange(e.target.value) : null)}
        />
        <div className="border rounded-sm bg-white overflow-auto border-text-primary">
          <div
            className="prose prose-slate p-4 prose-headings:text-text-primary prose-headings:font-gordita-bold prose-base font-inter-regular prose-strong:font-gordita-bold prose-code:text-sm 
          prose-strong:text-text-primary  prose-li:marker:text-text-primary prose-a:text-text-primary"
          >
            <Markdown options={markdownoptions}>{processedMarkdown}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Editor);
