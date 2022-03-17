import React from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from "axios"
import {useGlobalContext} from "../context/GlobalContext"

const Authentication = ({ register }) => {
  const {getCurrentUser, user} = useGlobalContext()
  const navigate = useNavigate()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [name, setName] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if(user && navigate) {
      navigate("/dashboard")
    }
  },[user, navigate])

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    let data = {}

    if(register) {
      data = {
        name,
        email,
        password,
        confirmPassword
      }
    } else {
      data = {
        email,
        password
      }
    }

    axios.post(register ? "/api/auth/register" : "/api/auth/login", data)
    .then(() =>{
      getCurrentUser()
    }).catch(error => {
      setLoading(false)
    })
  }

  return (
    <div className='auth'>
      <div className='auth__box'>
        <div className='auth__header'>
          <h1>{register ? 'Register' : 'Login'}</h1>
        </div>

        <form onSubmit={onSubmit}>
          {register && (
            <div className='auth__field'>
              <label>Name</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>
          )}
          <div className='auth__field'>
            <label>Email</label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='auth__field'>
            <label>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {register && (
            <div className='auth__field'>
              <label>Confirm Password</label>
              <input
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          <div className='auth__footer'>
            <button className='btn' type='submit' disabled={loading}>
              {register ? 'Register' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
