import { useRef } from "react";
import { Button } from "../Button/styled";
import { FileInputWrapper, HiddenInput } from "./styled";

interface inputProps {
    setFile: any
}

const FileInput = ({ setFile }: inputProps) => {
    const inputRef = useRef(null);

    return (
        <FileInputWrapper>
            {/* @ts-ignore */}
            <Button onClick={() => inputRef.current.click()}>
                Select file
            </Button>
            <HiddenInput
                ref={inputRef}
                type='file'
                id="geotiff-file"
                onChange={setFile}
            />
        </FileInputWrapper>
    )
};

export default FileInput;