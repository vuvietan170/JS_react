import React,{useState} from "react";

function CreateForm(){

    function useForm(initValues){
        const [values,setValue] = useState(initValues);
        const [errors,setError] = useState({});
        
        function handleChange(event){
            const {name,value} = event.target;
            setValue({...values,[name]: value,});
        }

        function validate(){
            const newError = {};

            if(!values.name.trim()){
                newError.name = "Name is Required";
            }
            if(!/\S+@\S+\.\S+/.test(values.email)){
                newError.email = "Invalid Email";
            }
            if(values.password.length < 6){
                newError.password = "Password is too weak!. Must be at 6 character"
            }
            //kiem tra form co hop le hay khong neu(dua theo so luong Keys)
            setError(newError);
            return Object.keys(newError).length === 0;

        }
        function handleSubmit(event){
            event.preventDefault(); // ngan trinh duyet reload lai trang khi submit(dung cho: Validation,Gui Api, Cap nhat Store)
            
            if(validate()){
                alert("Submit Succesfully");
                
                setValue(initValues);
                setError({});
            }
           
            
        
        }
        // Tra ve 1 object chua du lieu va ham ma component ben ngoai se su dung, 
        //Day la nhung gi hook useForm cung cap cho component
        return{
            values,
            errors,
            handleChange,
            handleSubmit,
        };
    }
    const {values, errors,handleChange,handleSubmit} = useForm({name: "", email:"", password:"",});
    return(
        <div>
            <h1>Register Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={values.name} onChange={handleChange}/>
                    <p>{errors.name}</p>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange}></input>
                    <p>{errors.email}</p>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={values.password} onChange={handleChange}></input>
                    <p>{errors.password}</p>
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    );
}
export default CreateForm;