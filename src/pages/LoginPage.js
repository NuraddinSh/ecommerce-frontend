import React from "react";
import '../cssPages/loginPage.css'

export default function LoginPage() {
    const [loginData, setLoginData]=React.useState({email:'', password:''})

    function handleChange(event) {
        setLoginData([event.target.name] = event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('ok')
    }
    return (
        <div className={'login-page'}>
            <header>
                <div className={"login-header"}>NIKE'A DAİR HER ŞEY İÇİN HESABIN</div>
            </header>
            <form onSubmit={handleSubmit} className={"login-form"}>
                <input className={"form-input"}
                       type="email"
                       placeholder={"E-mail address"}
                       name={loginData.email}
                       onChange={handleChange}
                />
                <input className={"form-input"}
                       type="password"
                       placeholder={"Password"}
                       name={loginData.password}
                       onChange={handleChange}
                />
                <button className={"login-btn"}>Search</button>
            </form>
        </div>
    )
}