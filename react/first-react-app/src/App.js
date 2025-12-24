import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState("");
  const [data, setData] = useState([]);

  const handleFirstName = (event) => {
    let value = event.target.value;
    setFirstName(value);
  }

  const handleLastName = (event) => {
    let value = event.target.value;
    setlastName(value);
  }

  const handleEmail = (event) => {
    let value = event.target.value;
    setEmail(value);
  }

  const handleGender = (event) => {
    let value = event.target.value;
    setGender(value);
  }

  const handleAgree = (event) => {
    let value = event.target.value;
    setAgree(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = {
      firstName,
      lastName,
      email,
      gender,
      agree
    };
    console.log("formdata----", formdata);
    setData([...data, formdata]);
    console.log("data------", data)
    handleClear();
  }

  const handleClear = () => {
    setFirstName("");
    setlastName("");
    setEmail("");
    setGender("");
    setAgree("");
  }
  return (

    <div className='container'>
      <div className='form-box'>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name: </label>
            <input type="text"
              value={firstName}
              onChange={handleFirstName} />
          </div>
          <div>
            <label>Last Name: </label>
            <input type="text"
              value={lastName}
              onChange={handleLastName} />
          </div>

          <div>
            <label>Email: </label>
            <input type="email"
              value={email}
              onChange={handleEmail} />
          </div>

          <div>
            <label>Gender:
              <div>
                <label>
                  <input type="radio"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={handleGender} />
                  Male
                </label>
                <label>
                  <input type="radio"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleGender} />
                  Female
                </label>
              </div>
            </label>
          </div>

          <div>
            <label>
              <input type="checkbox"
                checked={agree}
                onChange={handleAgree} />
              I Agree Terms and Conditions
            </label>

          </div>
          <button type="submit"> Submit</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </form>
      </div>

       <div className="tableDiv">

        {data.length === 0 ?
          (<p>"no data"</p>) : (
            <table border="1" cellPadding="8">
              <thead>
                <th>firstName</th>
                <th>lastName</th>
                <th>Email</th>
                <th>Gender</th>
              </thead>
              <tbody>
                {data.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>{ele.firstName}</td>
                      <td>{ele.lastName}</td>
                      <td>{ele.email}</td>
                      <td>{ele.gender}</td>
                    </tr>)
                })}
              </tbody>
            </table>
          )}

      </div>
    </div>
  );
}

export default App;



// data-Binding


