import React, {useState} from "react";
import Select from "../ui/Select";
import Input from "../ui/Input";
import Button from "../ui/Button";

const TestForm = () => {
    const [select, setSelect] = useState('0');
    const [user, setUser] = useState({
        login: '',
        password: ''
    })

    function onChangeSelect(e) {
        setSelect(e.target.value)
    }

    const onChangeUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user,
            [name]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault();

        setUser({login: '', password: ''});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({login: '', password: ''});
    }

    return (
        <div className="container-fluid py-md-3">
            <Select select={select} onChange={onChangeSelect}>
                <option value="0">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Select>
            <Select className="custom-select-sm" select={select} onChange={onChangeSelect}>
                <option value="0">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Select>

            <form onSubmit={handleSubmit}>
                <Input name="login" id="login" value={user.login} onChange={onChangeUser} aria-describedby="login" required>Username</Input>

                <Input type="password" name="password" id="password" value={user.password} onChange={onChangeUser} aria-describedby="password" required>Password</Input>

                <Button className="mr-2">
                    Log In
                </Button>

                <Button type="danger" onClick={handleReset}>
                    Reset
                </Button>

            </form>
        </div>
    )
}

export default TestForm;
