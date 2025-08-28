import { useEffect, useState } from "react";
import API from "../api/api";

const Pill = ({ status }) => {
  const s = (status || '').toLowerCase();
  const cls = s.includes('progress') ? 'pill prog' : s.includes('complete') ? 'pill done' : 'pill sch';
  return <span className={cls}>{status || 'Scheduled'}</span>;
};

export default function BookingsList(){
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async ()=>{
    setLoading(true);
    try {
      const r = await API.get("/bookings");
      setBookings(r.data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=> { load(); },[]);

  const markNext = async (b) => {
    const order = ['Scheduled','In Progress','Completed'];
    const i = order.indexOf(b.status || 'Scheduled');
    const next = order[(i+1) % order.length];
    const res = await API.put(`/bookings/${b.id}`, {...b, status: next});
    setBookings(list => list.map(x => x.id === b.id ? res.data : x));
  };

  const remove = async (id)=>{
    if(!confirm("Delete this booking?")) return;
    await API.delete(`/bookings/${id}`);
    setBookings(list => list.filter(x=> x.id !== id));
  };

  return (
    <div className="container">
      <div className="card glass">
        <h2 className="section-title">My Bookings</h2>
        {loading && <div className="card center">Loading…</div>}
        {!loading && bookings.length === 0 && <div className="card">No bookings yet. Book something from the Home page!</div>}

        <div className="grid" style={{gap:12}}>
          {bookings.map(b => (
            <div key={b.id} className="card" style={{display:'grid', gridTemplateColumns:'1fr auto', alignItems:'center', gap:10}}>
              <div>
                <div style={{fontWeight:900, letterSpacing:'-0.01em', textTransform:'capitalize'}}>
                  {b.service || b.serviceType} • Pet #{b.petId}
                </div>
                <div style={{color:'#64748b', marginTop: 4}}>
                  {b.date} at {b.time || '—'}
                </div>
                <div style={{marginTop: 8}}>
                  <Pill status={b.status} />
                </div>
                {b.notes && <div style={{marginTop:8, color:'#334155'}}>📝 {b.notes}</div>}
              </div>
              <div style={{display:'flex', gap:8}}>
                <button className="btn btn-ghost" onClick={()=> markNext(b)}>Mark Next</button>
                <button className="btn btn-danger" onClick={()=> remove(b.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
