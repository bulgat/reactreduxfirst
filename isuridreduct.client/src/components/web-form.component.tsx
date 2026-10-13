import React, { FormEvent } from "react";

const WebFormComponent = () => {
  console.log("000---", localStorage.getItem("submit"));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("001---");
  };

  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          login: <input type="text" name="login" />
        </div>
        <button>send</button>
      </form>
    </div>
  );
};

export default WebFormComponent;
