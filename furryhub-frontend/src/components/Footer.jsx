export default function Footer(){
  return (
    <footer style={{marginTop: 40}}>
      <div className="container card center" style={{background:'transparent'}}>
        © {new Date().getFullYear()} <strong>FurryHub</strong> • Built with ❤️ for pets
      </div>
    </footer>
  );
}
