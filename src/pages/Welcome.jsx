import welcomeImage from "../assets/images/welcome-image.png";
export default function Welcome() {
    return (
        <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/welcome-bg-image.png')] bg-cover h-screen bg-center flex flex-col place-items-center place-content-center">
            <h2 className="text-white text-center text-4xl">Savory & Sweet</h2>
            <img src={welcomeImage} alt="Welcome Image" />
            
        </div>
    )
}