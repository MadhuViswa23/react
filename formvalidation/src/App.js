
import {useState} from "react";
import {useForm} from "react-hook-form";
import './App.css';

function App() {
  const { register, handleSubmit, errors } = useForm();
  const[userInfo, setUserInfo] = useState();
  const onSubmit= (data) => {
    setUserInfo(data);
    console.log(data);
  };
  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}  </pre>
      <form onSubmit={ handleSubmit(onSubmit)}>
       
        <h1>REGISTER NOW</h1>
        <div classname="ui divider"></div>
        <div className="ui form"></div>
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" ref={register} />






        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="email" ref={register} />

        </div>

        <div className="field">
          <label>Password</label>
          <input type="text" name="password" placeholder="Password" />
          
          <input type="submit" value="submit"></input>
          
        </div>
      </form>
    </div>
  );
}

export default App;
