import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8081/auth",
  realm: "Fpi",
  clientId: "cobby",
});

export const init = () => {
  keycloak
    .init({
      onLoad: "login-required",
    })
    .then(() => {
      console.log("login");
    });
};

export default keycloak;
