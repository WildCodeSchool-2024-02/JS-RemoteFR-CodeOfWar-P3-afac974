import { Form } from "react-router-dom";

function ArtworkForm() {
  return (
    <Form method="post">
      <label htmlFor="name">Nouvelle Oeuvre</label>{" "}
      <input type="text" id="name" name="name" />
      <button type="submit">Ajouter</button>
    </Form>
  );
}

export default ArtworkForm;
