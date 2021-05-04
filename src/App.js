import './App.css';
import officeLogo from './the_office_logo.svg'
import chevron from './chevron.svg'


function App() {
  return (
    <div className="container">
      <img src={officeLogo} className="w-64" alt="The Office" />
      <div>
        <button type="button"><img src={chevron} className="w-auto" alt="Scroll Left" /></button>
        <figure>
          <img src="/images/ryan.png" alt="Ryan" />
          <blockquote>
            <p class="text-2xl">Last year, Creed asked me how to set up a blog. Wanting to protect the world from being exposed to Creed's brain, I opened up a Word document on his computer and put an address at the top. I've read some of it. Even for the Internet, it's... pretty shocking.</p>
          </blockquote>
          <figcaption className="text-center my-8">
            ~ Ryan Howard
          </figcaption>
        </figure>
        <button type="button"><img src={chevron} className="w-auto transform rotate-180" alt="Scroll right" /></button>
      </div>
    </div>
  );
}

export default App;
