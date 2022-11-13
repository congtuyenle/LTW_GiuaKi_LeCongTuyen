function Form({ option }) {
  return (
    React.createElement("form", { className: "account-form", onSubmit: evt => evt.preventDefault() },
    React.createElement("div", { className: 'account-form-fields ' + (option === 1 ? 'sign-in' : option === 2 ? 'sign-up' : 'forgot') },
    React.createElement("input", { id: "email", name: "email", type: "email", placeholder: "E-mail", required: true }),
    React.createElement("input", { id: "password", name: "password", type: "password", placeholder: "Password", required: option === 1 || option === 2 ? true : false, disabled: option === 3 ? true : false }),
    React.createElement("input", { id: "repeat-password", name: "repeat-password", type: "password", placeholder: "Repeat password", required: option === 2 ? true : false, disabled: option === 1 || option === 3 ? true : false })),

    React.createElement("button", { className: "btn-submit-form", type: "submit" },
    option === 1 ? 'Sign in' : option === 2 ? 'Sign up' : 'Reset password')));



}

function App() {
  const [option, setOption] = React.useState(1);

  return (
    React.createElement("div", { className: "container" },
    React.createElement("header", null,
    React.createElement("div", { className: 'header-headings ' + (option === 1 ? 'sign-in' : option === 2 ? 'sign-up' : 'forgot') },
    React.createElement("span", null, "Sign in to your account"),
    React.createElement("span", null, "Create an account"),
    React.createElement("span", null, "Reset your password"))),


    React.createElement("ul", { className: "options" },
    React.createElement("li", { className: option === 1 ? 'active' : '', onClick: () => setOption(1) }, "Sign in"),
    React.createElement("li", { className: option === 2 ? 'active' : '', onClick: () => setOption(2) }, "Sign up"),
    React.createElement("li", { className: option === 3 ? 'active' : '', onClick: () => setOption(3) }, "Forgot")),

    React.createElement(Form, { option: option }),
    React.createElement("footer", null,
    React.createElement("a", { href: "https://dribbble.com/shots/5041581-Zenbu-Sign-in-up-forgot-page", target: "_blank" }, "Original design with animations by Zenbu"))));



}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));