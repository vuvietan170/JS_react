import React from "react";
const RegisterForm = () => {
    const handleSubmit = (envent)=>{
        const name = envent.name.value;
        const email = envent.email.value;
        const password = envent.email.value;

        console.log(name);
        console.log(email);
        console.log(password)
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="name" name="name" placeholder="Your Name is.."/>
            <input type="email" name="email" placeholder="Your email:..."/>
            <input type="password" name="password" placeholder="Enter password..."/>

            <button type="submit">Submit</button>
        </form>
    );
};
export default RegisterForm;