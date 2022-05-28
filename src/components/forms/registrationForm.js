import FormHeading from "./formHeading"

const RegistrationForm = () => {
    return (
    <div className="h-screen bg-gradient-to-r from-[#000000] to-[#362A60] flex justify-center items-center 
    flex-col text-white">
        <div className="bg-[#24354F] px-20 py-10 rounded-3xl text-3xl shadow-2xl shadow-[#DB00FF]">
            Event Registration
        </div>
        <div>Full Name <span className="text-red">*</span></div>
    </div>)
}

export default RegistrationForm