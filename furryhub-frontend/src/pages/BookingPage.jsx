import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../api/api";

const SERVICE_OPTIONS = [
  { id:'grooming', label:'Grooming' },
  { id:'vet', label:'Vet on Call' },
  { id:'training', label:'Training' },
  { id:'adoption', label:'Adoption' },
  { id:'walking', label:'Dog Walking' },
  { id:'boarding', label:'Boarding' },
];

export default function BookingPage(){
  const nav = useNavigate();
  const preset = useLocation()?.state?.serviceId || 'grooming';
  const [pets, setPets] = useState([]);
  const [form, setForm] = useState({
    service: preset, date: "", time: "", petId: "", notes: ""
  });
  const [addingPet, setAddingPet] = useState(false);
  const [newPet, setNewPet] = useState({ name:"", type:"Dog", age: 1 });

  useEffect(()=>{
    API.get("/pets").then(r => setPets(r.data || [])).catch(()=>{});
  },[]);

  const onChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const addPet = async ()=>{
    if(!newPet.name) return alert("Pet name required");
    const res = await API.post("/pets", newPet);
    setPets(p => [res.data, ...p]);
    setForm(f => ({...f, petId: res.data.id}));
    setNewPet({ name:"", type:"Dog", age: 1 });
    setAddingPet(false);
  };

  const submit = async (e)=>{
    e.preventDefault();
    if(!form.petId) return alert("Please select a pet.");
    if(!form.date || !form.time) return alert("Please select date & time.");
    try{
      await API.post("/bookings", {
        service: form.service,
        date: form.date,
        time: form.time,
        petId: Number(form.petId),
        notes: form.notes
      });
      alert("Booking successful!");
      nav("/my-bookings");
    }catch{
      alert("Booking failed");
    }
  };

  return (
    <div className="container">
      <div className="card glass">
        <h2 className="section-title">Book a Service</h2>

        {/* Stepper feel */}
        <div className="grid grid-3" style={{marginBottom: 16}}>
          <div className="card center">1. Choose Service</div>
          <div className="card center">2. Pick Pet</div>
          <div className="card center">3. Schedule</div>
        </div>

        <form onSubmit={submit} className="grid" style={{gap: 12}}>
          <div>
            <label>Service</label>
            <select className="select" name="service" value={form.service} onChange={onChange}>
              {SERVICE_OPTIONS.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
          </div>

          <div className="grid grid-2">
            <div>
              <label>Pet</label>
              <select className="select" name="petId" value={form.petId} onChange={onChange}>
                <option value="">— Select a pet —</option>
                {pets.map(p => <option key={p.id} value={p.id}>{p.name} ({p.type})</option>)}
              </select>
              <div style={{marginTop:8}}>
                <button type="button" className="btn btn-ghost" onClick={()=> setAddingPet(v=>!v)}>
                  {addingPet ? "Cancel" : "Add New Pet"}
                </button>
              </div>
            </div>

            <div className="card" style={{display: addingPet ? 'block' : 'none'}}>
              <div className="grid" style={{gap:8}}>
                <input className="input" placeholder="Pet name" value={newPet.name} onChange={e=> setNewPet({...newPet, name:e.target.value})}/>
                <select className="select" value={newPet.type} onChange={e=> setNewPet({...newPet, type:e.target.value})}>
                  <option>Dog</option><option>Cat</option><option>Bird</option><option>Rabbit</option><option>Other</option>
                </select>
                <input type="number" className="input" min="0" placeholder="Age (years)" value={newPet.age} onChange={e=> setNewPet({...newPet, age: e.target.value})}/>
                <button type="button" className="btn btn-primary" onClick={addPet}>Save Pet</button>
              </div>
            </div>
          </div>

          <div className="grid grid-2">
            <div>
              <label>Date</label>
              <input type="date" className="input" name="date" value={form.date} onChange={onChange}/>
            </div>
            <div>
              <label>Time</label>
              <input type="time" className="input" name="time" value={form.time} onChange={onChange}/>
            </div>
          </div>

          <div>
            <label>Notes (optional)</label>
            <textarea className="textarea" name="notes" value={form.notes} onChange={onChange} placeholder="Tell us anything important: allergies, temperament, etc."/>
          </div>

          <div style={{display:'flex', justifyContent:'flex-end', gap:10}}>
            <button type="button" className="btn btn-ghost" onClick={()=> nav(-1)}>Back</button>
            <button className="btn btn-primary" type="submit">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
}
