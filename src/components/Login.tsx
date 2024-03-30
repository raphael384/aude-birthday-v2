import bcrypt from "bcryptjs";

interface Props {
  onEnter: (num: number) => void;
}

const Login = ({ onEnter }: Props) => {  


  const connect = async (password: string) => {
    const hash = "$2a$04$K36gGv0adxOCStpMAsO.heBDuhdY/nkaHiAHj3ci6D7YiS5VAZ5ve";
    if (await bcrypt.compare(password, hash)) {
      onEnter(36);
    } else {
      console.log("debug hash : " + (await bcrypt.hash(password, 3)));
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
          onChange={(e) => connect(e.target.value)}
        />
        <span onClick={() => onEnter(0)} className="invited">
          Accès Invité
        </span>
      </div>
    </div>
  );
};

export default Login;
