import { FileInputWrapper, Input } from "./styled";

const FileInput = () => (
    <FileInputWrapper>
        <Input
            type='file'
            id="geotiff-file"
        />
    </FileInputWrapper>
);

export default FileInput;