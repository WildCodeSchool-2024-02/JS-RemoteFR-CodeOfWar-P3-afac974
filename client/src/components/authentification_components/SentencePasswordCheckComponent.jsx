// import PropTypes from "prop-types";
// // import IconsComponent from "../IconsComponent";

// function SentencePasswordCheckComponent({ password, confirmPassword }) {
//   const getSrcConfirmPassword = () => {
//     if (confirmPassword === "") return "";
//     return password === confirmPassword ? "check" : "cross";
//   };

//   const getAltConfirmPassword = () => {
//     if (confirmPassword === "") return "";
//     return password === confirmPassword
//       ? "Mots de passe identiques"
//       : "Mots de passe différents";
//   };

//   const getTextConfirmPassword = () => {
//     if (confirmPassword === "") return "";
//     return password === confirmPassword
//       ? "Le mot de passe est identique."
//       : "Le mot de passe n'est pas identique.";
//   };

//   return (
//     <div className="registerpage_passwordConfirmCondition ">
//       {" "}
//       <IconsComponent
//         className="registerpage_passwordConditionIcons"
//         src={getSrcConfirmPassword()}
//         alt={getAltConfirmPassword()}
//       />
//       {getTextConfirmPassword()}
//     </div>
//   );
// }

// SentencePasswordCheckComponent.propTypes = {
//   password: PropTypes.string.isRequired,
//   confirmPassword: PropTypes.string.isRequired,
// };

// export default SentencePasswordCheckComponent;
