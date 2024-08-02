export const questions = [
  {
    id: 1,
    title: '==========LOGIN FORM==========',
    question: `
Guidelines: 
    1.) You have an incomplete login form. 
    2.) You are not allowed to add any additional HTML elements. 
    3.) You are not allowed to use refs. 
Tasks:
    * The login button should trigger the login() action imported above and pass required data to it.
    * Disable the Login button if email is blank OR if password is under 6 letters 
    * Disable the Login button while login action is being performed 
    * Show an error message from the login() if login fails. The error should be cleared every time user re-attempts to log in.
    * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully` ,
    answer: "answer 1",
    link: "",
    type: 'code'
  },
  {
    id: 2,
    title: 'test 2',
    question: "question 2",
    answer: "answer 2",
    link: "",
    type: 'no-code'
  },
  {
    id: 3,
    title: 'test 3',
    question: "question 3",
    answer: "",
    link: "",
    type: 'code'
  },

];
