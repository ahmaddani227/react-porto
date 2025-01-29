const FormContact = () => {
  return (
    <div id="form-contact" className="form-contact-container">
      <form className="form-contact">
        <div className="flex flex-col mb-5 ">
          <label htmlFor="name" className="mb-1 ">
            _name :
          </label>
          <input type="text" name="name" id="name" className="form-input" />
        </div>
        <div className="flex flex-col mb-5 ">
          <label htmlFor="email" className="mb-1 ">
            _email :
          </label>
          <input type="email" name="email" id="email" className="form-input" />
        </div>
        <div className="flex flex-col mb-5 ">
          <label htmlFor="message" className="mb-1 ">
            _message :
          </label>
          <textarea
            name="message"
            id="message"
            className="form-textarea"
          ></textarea>
        </div>
        <button className="form-btn">submit-message</button>
      </form>
    </div>
  );
};

export default FormContact;
