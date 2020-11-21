import React from "react";
import Select from "../ui/Select";
import Input from "../ui/Input";
import Button from "../ui/Button";

const TestForm = () => {
    return (
        <div className="container-fluid py-md-3">
            <form >
                <Select>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Select>
                <Select className="custom-select-sm">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Select>

                <Input name="Usename" id="login" aria-describedby="login"/>

                <Input type="password" name="Password" id="password" aria-describedby="password"/>

                <Button className="mr-2">
                    Log In
                </Button>

                <Button type="danger">
                    Reset
                </Button>

            </form>
        </div>
    )
}

export default TestForm;
