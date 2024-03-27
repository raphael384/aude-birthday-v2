import React, { useState } from "react";
import bcrypt from "bcryptjs";

interface Props {
  onEnter: (num: number) => void;
}

const Login = ({ onEnter }: Props) => {
  const [scale, setScale] = useState(1);

  const changeScale = () => {
    setScale((scale) => scale * 0.7);
  };

  const handleKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const hash =
        "$2a$04$K36gGv0adxOCStpMAsO.heBDuhdY/nkaHiAHj3ci6D7YiS5VAZ5ve";
      if (await bcrypt.compare(event.currentTarget.value, hash)) {
        onEnter(36);
      } else {
        changeScale();
        console.log(
          "debug hash : " + (await bcrypt.hash(event.currentTarget.value, 3))
        );
      }
    }
  };

  return (
    <div className="log-container">
      <div className="log-box">
        <span>Entrez le mot de passe</span>
        <input
          className="pwd-input"
          type="password"
          name="password"
          onKeyDown={handleKeyPress}
          style={{ transform: `scale(${scale})` }}
        />
        <span onClick={() => onEnter(0)} className="invited">
          Accès Invité
        </span>
      </div>
    </div>
  );
};

export default Login;
