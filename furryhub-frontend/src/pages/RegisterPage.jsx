import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function RegisterPage(){
  const nav = useNavigate();
  const [form, setForm] = useState({ username:"", email:"", password:"" });

  const register = async (e)=>{
    e.preventDefault();
    try{
      await API.post("/auth/register", form);
      alert("Registration successful! Please login.");
      nav("/login");
    }catch{
      alert("Registration failed");
    }
  };

  return (
    <div className="container">
      <div className="card glass" style={{maxWidth: 520, margin: '0 auto'}}>
        <h2 className="section-title">Create Account</h2>
        <form onSubmit={register} className="grid" style={{gap: 10}}>
          <input className="input" placeholder="Username" value={form.username} onChange={e=> setForm({...form, username:e.target.value})}/>
          <input type="email" className="input" placeholder="Email" value={form.email} onChange={e=> setForm({...form, email:e.target.value})}/>
          <input type="password" className="input" placeholder="Password" value={form.password} onChange={e=> setForm({...form, password:e.target.value})}/>
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
}
