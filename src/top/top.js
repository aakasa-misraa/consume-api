import { useState, useEffect } from "react";

const TopComponent = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <>
      <section id="id_top" className="">
        {title}
      </section>
      <section id="id_top_section" className="top_section">
        {data
          .filter((d, i) => i < 10)
          .map(({ title, url }) => {
            console.log(title);
            return (
              <>
                <div>
                  <p> {title}</p>
                  <img src={url} />
                </div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default TopComponent;
