import { useNavigate } from "react-router-dom";
import { useFormData } from "./FormContext";

// tao 1 khung layout cho tat ca cac step
function StepWrapper({ title, children, onNext, onBack, nextLabel = "Next" }) {
    return (
        <div>
            <h3>{title}</h3>
            {children}
            <div>
                {onBack && <button onClick={onBack}>Back</button>}
                {onNext && <button onClick={onNext}>{nextLabel}</button>}
            </div>
        </div>
    );
}
export function Step1() {
    const navigate = useNavigate();
    const { formData, updateField } = useFormData();

    return (
        <StepWrapper
            title="Step 1: User informaton"
            onNext={() => navigate("/form/step-2")}
        >
            <input
                placeholder="Enter name..."
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
            ></input>
        </StepWrapper>
    );
}
export function Step2() {
    const navigate = useNavigate();
    const { formData, updateField } = useFormData();

    return (
        <StepWrapper
            title="Email contact"
            onBack={() => navigate("/form/step-1")}
            onNext={() => navigate("/form/step-3")}
        >
            <input
                placeholder="Email..."
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
            />
        </StepWrapper>
    );
}
export function Step3() {
    const navigate = useNavigate();
    const { formData, updateField } = useFormData();

    return (
        <StepWrapper
            title="Address"
            onBack={() => navigate("/form/step-2")}
            onNext={() => navigate("/form/review")}
        >
            <input
                placeholder="Address..."
                value={formData.address}
                onChange={(e) => updateField("address", e.target.value)}
            />
        </StepWrapper>
    );
}
export function StepReview() {
    const navigate = useNavigate();
    const { formData, updateField } = useFormData();

    return (
        <StepWrapper
            title="User Information"
            onBack={() => navigate("/form/step-3")}
        >
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Address: {formData.address}</p>
            <button onClick={() => alert("Was Submited")}>
                Submit
            </button>
        </StepWrapper>
    );
}
