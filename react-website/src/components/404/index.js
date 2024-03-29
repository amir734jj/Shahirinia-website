import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  let location = useLocation();

  return (
    <Container>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </Container>
  );
};

export default NotFound;
