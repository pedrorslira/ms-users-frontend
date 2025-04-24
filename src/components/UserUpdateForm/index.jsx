import { updateUser } from "../../api/user";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

export const UserUpdateForm = ({
    initialData = { id: "", name: "", email: "", phone: "" },
    onSubmit,
}) => {
    const formik = useFormik({
        initialValues: initialData,
        validationSchema: Yup.object({
            id: Yup.number()
                .required("Id is a required field"),
            name: Yup.string()
                .matches(/^[A-Za-z ]*$/, "Please, enter a valid name")
                .min(2, "Name is too short")
                .max(70, "Name is too long")
                .required("Name is a required field"),
            email: Yup.string()
                .email("Invalid Email")
                .required("Email is a required field"),
            phone: Yup.string()
                .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Invalid phone number")
                .nullable()
        }),
        onSubmit: async (values) => {
            try {
                if (onSubmit) {
                    await onSubmit(values);
                } else {
                    const { id, ...rest } = values;
                    await updateUser(Number(id), rest);
                }
                toast.success("User updated successfully!");
            } catch (error) {
                console.error(error);
                toast.error(error.response.data?.message || 'Something went wrong. Please try again');
            }
        },
        enableReinitialize: true,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    name="id"
                    placeholder="ID"
                    value={formik.values.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.id && formik.errors.id && (
                    <div style={{ color: "red" }}>{formik.errors.id}</div>
                )}
            </div>

            <div>
                <input
                    name="name"
                    placeholder="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                    <div style={{ color: "red" }}>{formik.errors.name}</div>
                )}
            </div>

            <div>
                <input
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                )}
            </div>

            <div>
                <input
                    name="phone"
                    placeholder="Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <div style={{ color: "red" }}>{formik.errors.phone}</div>
                )}
            </div>

            <button type="submit" style={{ marginTop: '20px' }}>{"Update"}</button>
        </form>
    );
};
