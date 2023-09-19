import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission here (e.g., send data to a server)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    ref={register({ required: "Name is required" })}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    ref={register({
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Message:</label>
                <textarea
                    name="message"
                    ref={register({ required: "Message is required" })}
                />
                {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
