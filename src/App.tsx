import './App.css'

function App() {


  return (
       <div className="App">
      <header className="navbar">
        <div className="logo">MySite</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>My name is Karoly Zolyomi and I'm a <span>Web Developer</span></h1>
        <p>This site adapts to all screen sizes using CSS Flexbox and Media Queries!</p>
      </section>

      <section className="content">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </section>
    </div>
  )
}

export default App
