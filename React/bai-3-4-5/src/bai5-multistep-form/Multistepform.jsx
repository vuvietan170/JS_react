import { Routes, Route, useLocation } from "react-router-dom";
import { FormProvider } from "./FormContext";
import { Step1, Step2, Step3, StepReview } from "./Steps";

const steps = [
    { path: "step-1", label: "Name" },
    { path: "step-2", label: "Email" },
    { path: "step-3", label: "Address" },
    { path: "review", label: "Information" },
];
export default function MultiStepForm() {
    const location = useLocation();
    const currentPath = location.pathname.split("/").pop(); // chon duong dan hien tai tach chuoi, lay ptu cuoi

    return (
        <FormProvider>
            <h2>MultistepForm voi Routing</h2>

            <div>
                {steps.map((p, l) => (
                    <div key={p.path}>
                        {l + 1}.{p.label}
                    </div>
                ))}
            </div>
            <Routes>
                <Route path="/form/step-1" element={<Step1 />} />
                <Route path="/form/step-2" element={<Step2 />} />
                <Route path="/form/step-3" element={<Step3 />} />
                <Route path="/form/review" element={<StepReview />} />
            </Routes>
        </FormProvider>
    );
}
