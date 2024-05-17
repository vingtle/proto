
import { useEffect, useState } from "react";
import { Input } from "../../components/Input/Input";
import { CategorieList } from "../../components/CategorieList/CategorieList";
import notevideo from "../../assets/noteVideo.mp4"
import "./notes.css"

const Notes = () => {
  const [Category, setCategory] = useState(() => {
    const saveData = localStorage.getItem("myData");
    return saveData ? JSON.parse(saveData) : [];
  });

  const [newCat, setNewCat] = useState();
  const handleInput = (ev) => {
    setNewCat(ev.target.value);
  };

  const addCategory = () => {
    if (newCat === "") {
      return alert("Write your title");
    } else {
      let theDate = new Date();
      const localDate = theDate.toLocaleDateString();
      let theTime = new Date();
      const localTime = theTime.toLocaleTimeString();
      const theCategory = {
        id: Category.length === 0 ? 1 : Category[Category.length - 1].id + 1,
        categoryName: newCat,
        date: localDate,
        time: localTime,
      };
      setCategory([...Category, theCategory]);
      setNewCat("");
    }
  };
  const deleteCategory = (id) => {
    setCategory(Category.filter((cate) => cate.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(Category));
  }, [Category]);


  return (
    <div>
  <div className="video-container">
    <video muted loop autoPlay>
      <source src={notevideo} type="video/mp4"></source>
    </video>
  </div>

    <div id="notes">
    <p className="userName">hello{""}! I hope you're enjoying!</p>
    <Input
      newCat={newCat}
      handleInput={handleInput}
      addCategory={addCategory}

    />
    <div className="Category-Container">
      {Category.map((cate) => (
        <CategorieList
          key={cate.id}
          catBox={cate}
          deleteCategory={deleteCategory}
          newCat={newCat}
        />
      ))}
    </div>
  </div>

  </div>
  )
}

export default Notes