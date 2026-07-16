import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Dashboard from "./bai3-dashboard/Dashboard";
import { AuthProvider } from "./bai3-dashboard/AuthContext";
import SearchPage from "./bai4-search-filter/SearchPage";
import MultiStepForm from "./bai5-multistep-form/Multistepform";
import { FormProvider } from "./bai5-multistep-form/FormContext";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <FormProvider>
                    {/* <Dashboard /> */}
                    {/* <SearchPage /> */}
                    <MultiStepForm/>
                </FormProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
