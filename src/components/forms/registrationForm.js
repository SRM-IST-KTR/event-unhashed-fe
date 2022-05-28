import FormHeading from "./formHeading"
import Input from "./formInput"

const RegistrationForm = () => {
    return (
    <div className="bg-gradient-to-r from-[#000000] to-[#362A60] flex justify-center items-center 
    flex-col text-white">
        <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="bg-[#24354F] w-8/12 px-20 py-10 rounded-3xl text-3xl shadow-2xl shadow-[#DB00FF]
            text-center">
                Event Registration
            </div>
            <div className="w-full">
                <div className="text-2xl">Full Name <span className="text-red">*</span></div>
                <div className="flex justify-around">
                    <Input type="text" width="6/12"/>
                    <Input type="text" width="6/12"/>
                </div>
            </div>
            <div className="w-full">
                <div className="text-2xl">Contact Number <span className="text-red">*</span></div>
                <div>
                    <Input type="text" defaultValue="First Name"/>
                </div>
            </div>
            <div className="w-full">
                <div className="text-2xl">Registration Number <span className="text-red">*</span></div>
                <div>
                    <Input type="text" defaultValue="First Name"/>
                </div>
            </div>
            <div className="w-full">
                <div className="text-2xl">Department (With specialisation) <span className="text-red">*</span></div>
                <div>
                    <Input type="text" defaultValue="First Name"/>
                </div>
            </div>
            <div className="w-full">
                <div className="text-2xl">year <span className="text-red">*</span></div>
                <div>
                    <Input type="text" defaultValue="First Name"/>
                </div>
            </div>
            <div className="w-full">
                <div className="text-2xl">SRM Email-id <span className="text-red">*</span></div>
                <div>
                    <Input type="text" defaultValue="First Name"/>
                </div>
            </div>
            <div className="w-full">
                <div className="text-2xl">where did you hear about the event <span className="text-red">*</span></div>
                <div>
                    <Input type="text" defaultValue="First Name"/>
                </div>
            </div>

            <button>Submit</button>
        </div>
    </div>)
}

export default RegistrationForm