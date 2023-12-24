import { Editor } from "@tinymce/tinymce-react";

interface TextEditorProps {
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  defaultValue?: string;
}

export default function TextEditor({ textValue, setTextValue, defaultValue }: Readonly<TextEditorProps>) {
  return (
    <Editor
      apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      onEditorChange={(newValue) => {
        setTextValue(newValue);
      }}
      value={textValue}
      initialValue={defaultValue}
      init={{
        plugins:
          " mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",

        spellchecker_language: "pt_BR",
      }}
    />
  );
}
