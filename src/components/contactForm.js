// import React from "react";
// import { useForm } from "react-hook-form";

// function ContactForm() {
//     const { register, handleSubmit, errors } = useForm();

//     const onSubmit = (data) => {
//         console.log(data);
//         // Handle form submission here (e.g., send data to a server)
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     ref={register({ required: "Name is required" })}
//                 />
//                 {errors.name && <p>{errors.name.message}</p>}
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     ref={register({
//                         required: "Email is required",
//                         pattern: {
//                             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                             message: "Invalid email address",
//                         },
//                     })}
//                 />
//                 {errors.email && <p>{errors.email.message}</p>}
//             </div>
//             <div>
//                 <label>Message:</label>
//                 <textarea
//                     name="message"
//                     ref={register({ required: "Message is required" })}
//                 />
//                 {errors.message && <p>{errors.message.message}</p>}
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default ContactForm;

import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { t } = useTranslation();

    const onSubmit = (data) => console.log(data);

    console.log(watch("example"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-box">
                <input
                    placeholder={t("contact_form_name")}
                    {...register("name", { required: true })}
                />
                {errors.name && <p>{t("contact_form_name_required")}</p>}
            </div>
            {/* <div className="input-box">
                <input
                    placeholder={t("contact_form_last_name")}
                    {...register("lastName")}
                />
            </div> */}
            <div className="input-box">
                <input
                    placeholder={t("contact_form_email")}
                    {...register("email")}
                />
                {/* {errors.email && (
                    <p>{t("contact_form_phone_number_required")}</p>
                )} */}
            </div>
            <div className="input-box">
                <input
                    placeholder={t("contact_form_phone_number")}
                    {...register("phone", { required: true })}
                />
                {errors.phone && (
                    <p>{t("contact_form_phone_number_required")}</p>
                )}
            </div>
            {/* <input {...register("age", { pattern: /\d+/ })} /> */}
            {/* {errors.age && <p>Please enter number for age.</p>} */}
            <input type="submit" />
        </form>
    );
};

export default ContactForm;
