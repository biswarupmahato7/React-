import Icon from "../Icon/icon";
import "./Card.css";

function Card({ gameEnd, player, onPlay, index }) {
  let icon = <Icon />;

  if (player === "X") {
    icon = <Icon name="cross" />;
  } else if (player === "0") {
    icon = <Icon name="circle" />;
  }

  return (
    <div className="card" onClick={() => !gameEnd && onPlay(index)}>
      {icon}
    </div>
  );
}

export default Card;
