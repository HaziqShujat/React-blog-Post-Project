
import "./Cards.css";

function Cards() {
  const storedData = localStorage.getItem("object");
  const data = storedData ? JSON.parse(storedData) : [];

  return (
    <div className="container">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <div className="card" key={index}>
            <h1 className="card-date">{item.date}</h1>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-content">{item.content}</p>
            <h3 className="card-author">{item.author}</h3>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Cards;
