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
        plugins: [
          "advlist",
          "anchor",
          "autolink",
          "charmap",
          "code",
          "fullscreen",
          "help",
          "image",
          "insertdatetime",
          "link",
          "lists",
          "media",
          "preview",
          "searchreplace",
          "table",
          "visualblocks",
          "accordion",
          "emoticons",
          "importcss",
          "textcolor",
        ],
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat | forecolor backcolor",
        spellchecker_language: "pt_BR",
      }}
    />
  );
}
