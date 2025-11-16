"use client";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const Student = () => {
  const router = useRouter();

  const handleStudent = async (credentialResponse: any) => {
    console.log("Raw Google response:", credentialResponse);

    if (credentialResponse.credential) {
      const user = jwtDecode(credentialResponse.credential);
      console.log("Decoded user:", user);
      const email = user.email;
      console.log("User email:", email);
      sessionStorage.setItem("studentEmail", email);

      try {
        const sendEmailToBackend = async () => {
          const response = await fetch("http://127.0.0.1:8000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
          });
          const data = await response.json();
          console.log("Response from backend:", data);
        };

        await sendEmailToBackend();
        router.push("/StudentMap");
      } catch (error) {
        console.error("Error sending email to backend:", error);
      }
      //FIXXMEEE use me
    } else {
      console.log("No JWT received!");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleStudent}
      onError={() => console.log("Login failed")}
      theme="filled_blue"
      text="signin_with"
      shape="rectangular"
    />
  );
};

export default Student;
