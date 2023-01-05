import "./styles.css";
import { useState, useEffect } from "react";

export default function Body() {
  const [form, setForm] = useState({ upperText: "", lowerText: "", url: "" });
  const [urlarray, setURLarray] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const Data = await res.json();
      setURLarray(Data.data.memes);
    };
    fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const index = Math.floor(Math.random() * urlarray.length);
    setForm((prevForm) => {
      return {
        ...prevForm,
        url: urlarray[index].url,
      };
    });
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form--input"
          placeholder="Upper text"
          name="upperText"
          autocomplete="off"
          onChange={handleChange}
          value={form.upperText}
        />
        <input
          className="form--input"
          placeholder="Lower text"
          name="lowerText"
          autocomplete="off"
          onChange={handleChange}
          value={form.lowerText}
        />
        <button className="form--button" placeholder="Generate the Meme">
          Click to Generate Meme
        </button>
      </form>
      <div className="meme">
        <img src={form.url} className="meme--image" />
        <h2 className="meme--text top">{form.upperText}</h2>
        <h2 className="meme--text bottom">{form.lowerText}</h2>
      </div>
    </>
  );
}
