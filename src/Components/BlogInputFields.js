import { useState } from "react";
import "./BlogInputField.css";

function BlogInputFields() {
  const [openToggle, setOpenToggle] = useState(false);

  function open() {
    setOpenToggle(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dateValue = e.target.elements.date.value;

    const titleValue = e.target.elements.title.value;
    const contentValue = e.target.elements.content.value;
    const authorValue = e.target.elements.author.value;

    const object = {
      date: dateValue,
      title: titleValue,
      content: contentValue,
      author: authorValue,
    };
    let allData = JSON.parse(localStorage.getItem("object"));

    if (!Array.isArray(allData)) {
      allData = [];
    }

    allData.push(object);
    localStorage.setItem("object", JSON.stringify(allData));
    e.target.reset();
    setOpenToggle(false);
  }

  return (
    <div className="blog-form">
      {openToggle ? (
        <form onSubmit={handleSubmit}>
          <div className="blog-post">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" />

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />

            <label htmlFor="content">Blog Post:</label>
            <textarea id="content" name="content"></textarea>

            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" />
            <div className="spacing">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button
                type="submit"
                onClick={() => setOpenToggle(false)}
                className="submit-btn"
              >
                discard
              </button>
            </div>
          </div>
        </form>
      ) : (
        <button onClick={open} className="open-btntoggle">
          Click To Open
        </button>
      )}
    </div>
  );
}

export default BlogInputFields;
