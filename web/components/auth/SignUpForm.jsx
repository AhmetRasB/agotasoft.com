"use client";
import Icon from "@/public/images/contact/icon5.png";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../common/Field";
function SignUpForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		reset();
		toast("Sign up completed!");
		console.log("Submited Form Data = ", formData);
	};
	return (
		<section className="agota-section-padding2">
			<ToastContainer position="bottom-right" />
			<div className="container">
				<div className="agota-form-field-box">
					<h2>Create an account</h2>
					<div className="agota-field-box">
						<form onSubmit={handleSubmit(submitForm)}>
							<div className="agota-main-field">
								<Field label="Full name" error={errors.fname}>
									<input
										{...register("fname", { required: "Full Name is required." })}
										type="text"
										name="fname"
										id="fname"
										placeholder="Adam Smith"
									/>
								</Field>
							</div>
							<div className="agota-main-field">
								<Field label="Email address" error={errors.email}>
									<input
										{...register("email", { required: "Email is required." })}
										type="email"
										name="email"
										id="email"
										placeholder="example@gmail.com"
									/>
								</Field>
							</div>
							<div className="agota-main-field agota-subscription-field-inner">
								<Field label="Enter Password" error={errors.password}>
									<input
										{...register("password", {
											required: "Password is required.",
											minLength: {
												value: 8,
												message: "Your password must be at least 8 characters.",
											},
										})}
										type="password"
										name="password"
										id="password"
										placeholder="Enter password"
										className="form-control"
									/>
								</Field>
							</div>
							<div className="agota-form-content1">
								<p>
									By clicking ‘’Create Account’’ you agree to our <span>Terms</span> and that you have
									read our <span>Privacy Policy</span>.
								</p>
							</div>
							<button className="agota-subcribe-btn2" type="submit">
								Create Account
							</button>
							<div className="login">
								<span>Have an account?</span>
								<Link href="/sign-in">
									<h4>Log In</h4>
								</Link>
							</div>
							<div className="login-with-google">
								<a target="_blank" href="https://www.google.com/">
									<Image src={Icon} alt="Icon" />
									<h5>Sign up with google</h5>
								</a>
							</div>
							<div className="form-bottom-text">
								<p>or, sign up with your email</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SignUpForm;
