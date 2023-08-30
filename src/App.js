import Form from "./components/1-forms/Form";
import FormWithObject from "./components/1-forms/FormWithObject copy";
import KeyboardClipboard from "./components/2-keyboardClipboardEvents/KeyboardClipboard";
import MouseEvent from "./components/3-mouseEvents/MouseEvent";

function App() {
  return (
    <div className="container mt-4 text-center">
      <Form />
      <FormWithObject />
      <KeyboardClipboard />
      <MouseEvent />
    </div>
  );
}

export default App;
