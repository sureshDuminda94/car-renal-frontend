import React, { useState } from "react";
import "../styles/settings.css";
import axios from "axios";
const Settings = () => {
  const initState = {
    image: "",
    name: "",
    fuel: "",
    rent: "",
  };

  const [state, setState] = useState(initState);

  const { image, name, fuel, rent } = state;

  const change = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
    console.log(state);
    //setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(name)
    axios.post("https://carrental-5ub8.onrender.com/create", {
      image,
      name,
      fuel,
      rent,
    });
  };
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">New Car</h2>

        <div className="details__form">
          <h2 className="profile__title">Profile</h2>
          <p className="profile__desc">
            Update your photo and personal details here
          </p>
          <form>
            <div className="form__group">
              <div>
                <label>Car Name</label>
                <input
                  type="text"
                  placeholder="toyota"
                  name="name"
                  onChange={change}
                />
              </div>

              <div>
                <label>Image</label>
                <input
                  type="text"
                  placeholder="SYL 3108"
                  name="image"
                  onChange={change}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Fual Type</label>
                <input name="fuel" onChange={change} />
              </div>

              <div>
                <label>Rent Per Hour</label>
                <input type="number" name="rent" onChange={change} />
              </div>
            </div>

            <div className="form__group">
              <div className="profile__img-btns">
                <button className="new_car" onClick={handleSubmit}>
                  New Car
                </button>
                <button className="update__btn">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
