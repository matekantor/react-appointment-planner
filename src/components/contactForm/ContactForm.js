import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-label="Contact Name"
          placeholder="Contact Name"

        />
      </label>
      <br />
      <label>
        <input
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          //US Pattern change to hungarian?
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          aria-label="Contact Phone"
          placeholder="Contact Phone (###-###-####)"
        />
      </label>
      <br />
      <label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
          aria-label="Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" aria-label="Add Contact" />
    </form>
  );
};

