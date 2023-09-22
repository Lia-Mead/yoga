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

    // const onSubmit = (data) => console.log(data);
    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                "https://yoga.liatmeadows/contact_me.php",
                // "/contact_me.php",
                {
                    method: "POST",
                    port: 3001,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                // Handle success
                console.log("post ok", response.body, response);
            } else {
                // Handle error
                console.log("post else");
            }
        } catch (error) {
            // Handle network error
        }
    };

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
