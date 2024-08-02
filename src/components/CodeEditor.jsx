import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const ReactEditor = () => {
    const instructions = `
    Guidelines: 
    1.) You have an incomplete login form.
    2.) You are not allowed to add any additional HTML elements.
    3.) You are not allowed to use refs.

    Tasks:
    * The login button should trigger the login() action imported above and pass required data to it.
    * Disable the Login button if email is blank OR if password is under 6 letters.
    * Disable the Login button while login action is being performed.
    * Show an error message from the login() if login fails. The error should be cleared every time the user re-attempts to log in.
    * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.
    `;

    return (
        <ReactCodeMirror
          value={instructions}
          height="400px"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            console.log('value:', value);
          }}
        />
    );
}

export default ReactEditor;