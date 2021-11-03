import { useState } from "react";

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    food_description: '',
    img_url: ''
  })

  const { title, address, food_description, img_url } = formData;
  const { handlePostCreate } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      title: value,
    });
  };

  return (
     <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <h1>Create Food</h1>
      <label>
        Name:
        <input type='text' value={title} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}
