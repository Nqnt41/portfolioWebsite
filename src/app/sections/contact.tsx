import './contact.css';

export default function Contact() {
    // Using template from docs.web3forms.com
    async function handleSubmit(e : any) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "b2c1105c-f08b-4e75-bc4a-9bbb5f10c03a",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            alert("Message sent! Thank you very much!");
            e.target.reset();
        }
        else {
            console.log(result);
            alert("Message failed to send! Please reload the page and try again.");
        }
    }

    return (
        <div className="flex flex-col items-center w-[100vw]">
            <h1 className="fadeHidden text-6xl py-12 text-center font-bold">Contact</h1>

            <form onSubmit={handleSubmit} action="" className="fadeHidden w-[60%] text-xl">
                <h2 className="flex text-center justify-center pt-0 pb-2 px-2">Have a question, want to work together, or just want to say hello?<br/>Leave your details and I will reach out to you as soon as possible!</h2>
                <input type="text" name="name" placeholder="Name" className="p-1 w-full border-black border-solid border-2 bg-white placeholder-gray-500 text-black" required />
                <input type="email" name="email" placeholder="Email" className="p-1 w-full border-black border-solid border-2 bg-white placeholder-gray-500 text-black" required />
                <textarea name="message" placeholder="Message" className="p-1 w-full border-black border-solid border-2 bg-white placeholder-gray-500 text-black" required />
                <button type="submit" className="mt-1 mb-8 border-black border-solid border-2 bg-white hover:bg-gray-400 border-3 p-1 cursor-pointer rounded-md text-black font-bold">Submit</button>
            </form>
        </div>
    )
}