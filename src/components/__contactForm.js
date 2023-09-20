import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Send the email using the SendGrid API
            const response = await axios.post("/send-email", data);

            if (response.status === 200) {
                alert("Email sent successfully");
            } else {
                alert("Failed to send email");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to send email");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    {...register("email", {
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
                    {...register("message", {
                        required: "Message is required",
                    })}
                />
                {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
