import './styles.css'
let logo =  require(`./troll-face.png`)
export default function Head() {
return (
    <>
      <header className="head">
        
        <img src= {logo} className='head--img'></img>
        <h2 className='head--title'>Meme Generator</h2>
        <h3 className='head--project'>meme generator project</h3>
      </header>
    </>
  );
}
