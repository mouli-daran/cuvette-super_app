import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const Forms = () => {

  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      email: "",
      tel: "",
      shareData: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Field is Required"),
      userName: Yup.string().required("Field is Required"),
      email: Yup.string().email("Invalid email").required("Field is Required"),
      tel: Yup.string().required("Field is Required"),
      shareData: Yup.boolean().oneOf(
        [true],
        "Check this box if you want to proceed"
      ),
    }),
    onSubmit: (values) => {
      localStorage.setItem("formData", JSON.stringify(values));
      navigate("/homepage"); 
    },
  });

  return (
    <div className="input-container">
      <form
        className="flex flex-col gap-y-2 w-[350px]"
        onSubmit={formik.handleSubmit}
      >
        <input
          className="bg-zinc-700 p-1"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 leading-3">{formik.errors.name}</div>
        ) : null}

        <input
          className="bg-zinc-700 p-1"
          type="text"
          name="userName"
          id="userName"
          placeholder="UserName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div className="text-red-500 leading-3">{formik.errors.userName}</div>
        ) : null}

        <input
          className="bg-zinc-700 p-1"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 leading-3">{formik.errors.email}</div>
        ) : null}

        <input
          className="bg-zinc-700 p-1"
          type="tel"
          name="tel"
          id="tel"
          placeholder="Mobile"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tel}
        />
        {formik.touched.tel && formik.errors.tel ? (
          <div className="text-red-500 leading-3">{formik.errors.tel}</div>
        ) : null}

        <label htmlFor="shareData">
          <input
            className="bg-zinc-700 p-1"
            type="checkbox"
            id="shareData"
            name="shareData"
            checked={formik.values.shareData}
            onChange={formik.handleChange}
          />
          <span className="ml-2 text-gray-600">
            Share my registration data with Superapp
          </span>
        </label>
        {formik.touched.shareData && formik.errors.shareData ? (
          <div className="text-red-500">{formik.errors.shareData}</div>
        ) : null}
    
        <button
          className="submitBtn w-[350px] bg-green-500 rounded-2xl"
          type="submit"
        >
          Sign Up
        </button>
        
      </form>
      <p className=" text-left text-sm break-words py-2">
        By clicking on Sign up. you agree to Superapp{" "}
        <span className="text-green-500">
          Terms and <br />
          Conditions of Use
        </span>
      </p>
      <p className="text-left text-sm py-2">
        To learn more about how Superapp collects, uses, shares <br /> and  protects
        your personal data please head Superapp <span className="text-green-600"> <br />Privacy  Policy</span>
      </p>
    </div>
  );
};

export default Forms;
