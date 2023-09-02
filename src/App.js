import ImageUploader from "./components/ImageUploader";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <>
      <section id="register" className="row ">
        <div className="col-4 m-auto">
        <RegistrationForm/>
        <ImageUploader/>
        </div>
      </section>
    </>
  );
}

export default App;
