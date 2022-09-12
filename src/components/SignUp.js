import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="signup-container">
        <div className="signup">
          <h3>Inscription</h3>
          <form>
            <input type="text" placeholder="pseudo" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Mot de passe" required />
            <input type="submit" value="Inscription" required />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
