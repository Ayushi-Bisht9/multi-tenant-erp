import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // State for the real API login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Prototype demo login routing
  const handleRoleLogin = (role) => {
    if (role === "Global Admin") navigate("/global-admin");
    else if (role === "School Admin") navigate("/school-admin");
    else if (role === "Teacher") navigate("/teacher");
    else if (role === "Student") navigate("/student");
    else if (role === "Parent") navigate("/parent");
  };

  // Real backend API login
  const handleRealLogin = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(null);
    setLoading(true);

    try {
      // Use the base URL from the .env file (supports Vite and Create React App)
      const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
      
      if (!baseUrl) {
        throw new Error("Base URL is not defined in the environment variables. Please check your .env file.");
      }

      console.log("1. Attempting login to:", `${baseUrl}v1/auth/login/`);
      
      // --- STEP 1: GET THE TOKENS ---
      const loginResponse = await fetch(`${baseUrl}v1/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });

      let loginData;
      try {
        loginData = await loginResponse.json();
      } catch (jsonErr) {
        throw new Error("Received non-JSON response from server during login.");
      }

      if (!loginResponse.ok) {
        throw new Error(loginData.detail || `Login failed: ${loginResponse.status}`);
      }

      if (!loginData.access) {
        throw new Error("No access token found in the response.");
      }

      // Save the tokens securely in local storage
      localStorage.setItem("accessToken", loginData.access);
      localStorage.setItem("refreshToken", loginData.refresh);
      console.log("Tokens saved successfully!");

      // --- STEP 2: FETCH USER PROFILE DETAILS ---
      console.log("2. Fetching user profile from:", `${baseUrl}v1/profiles/me/`);
      
      const meResponse = await fetch(`${baseUrl}v1/profiles/me/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${loginData.access}` // Attach the JWT here
        }
      });

      let userData;
      try {
        userData = await meResponse.json();
      } catch (jsonErr) {
        throw new Error("Received non-JSON response from server while fetching profile.");
      }

      if (!meResponse.ok) {
        throw new Error("Successfully logged in, but failed to fetch user profile details.");
      }

      console.log("User Profile Data:", userData);

      // Optional: Save user details in local storage or context so other components can use it
      localStorage.setItem("userProfile", JSON.stringify(userData));

      // --- STEP 3: NAVIGATE BASED ON USER TYPE ---
      const { is_superuser, roles, profiles, identity } = userData;

      if (is_superuser) {
        navigate("/global-admin");
      } else if (roles && (roles.includes("School Admin") || roles.includes("Admin"))) {
        // Adjust the string match here based on how you name your roles in Django
        navigate("/school-admin");
      } else if (profiles?.teacher?.exists) {
        navigate("/teacher");
      } else if (profiles?.student?.exists) {
        navigate("/student");
      } else if (profiles?.parent?.exists) {
        navigate("/parent");
      } else {
        console.warn("No matching role/profile found in /profiles/me/ response:", userData);
        alert(`Welcome ${identity?.first_name || 'User'}! Your specific role was not recognized to auto-redirect.`);
      }

    } catch (err) {
      console.error("Login Error Caught:", err);
      if (err.message === "Failed to fetch") {
        setError("Network Error: Cannot connect to the server. Is CORS configured in Django?");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body text-on-surface">
      {/* HEADER */}
      <header className="w-full flex justify-between items-center px-8 py-4">
        <h1 className="text-xl font-headline font-bold text-primary">
          Academic Architect
        </h1>
        <Link to="/" className="text-sm text-gray-500 flex items-center gap-1">
          ← Back to Home
        </Link>
      </header>

      {/* MAIN SECTION */}
      <main className="flex items-center justify-center px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
          
          {/* LEFT SIDE */}
          <div className="hidden md:block">
            <h1 className="text-5xl font-headline font-extrabold leading-tight mb-6">
              Elevating
              <span className="text-primary"> Academic</span>
              <br />
              Intelligence.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md mb-8">
              Experience a high-end digital workspace designed for the modern
              educational ecosystem. Seamless, secure, and smart.
            </p>

            <div className="bg-surface-container-low p-6 rounded-xl">
              <div className="flex gap-3 items-center">
                <div className="bg-white p-2 rounded-md">
                  <span className="material-symbols-outlined text-primary">
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="font-semibold">Secure Access</p>
                  <p className="text-sm text-on-surface-variant">
                    256-bit SSL Encryption Active
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LOGIN CARD */}
          <div className="max-w-md w-full mx-auto">
            <div className="bg-white p-10 rounded-lg ambient-shadow">
              <h2 className="text-3xl font-headline font-bold mb-2">
                Login to AI School ERP
              </h2>
              <p className="text-on-surface-variant mb-6">
                Access your personalized dashboard securely.
              </p>

              {/* REAL API FORM */}
              <form onSubmit={handleRealLogin} className="space-y-5">
                {error && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
                    {error}
                  </div>
                )}

                <div>
                  <label className="text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full mt-2 px-4 py-3 rounded-md bg-surface-container-low outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div>
                  <div className="flex justify-between">
                    <label className="text-sm font-semibold">Password</label>
                    <span className="text-xs text-primary cursor-pointer hover:underline">
                      Forgot Password?
                    </span>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full mt-2 px-4 py-3 rounded-md bg-surface-container-low outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember" className="text-sm text-on-surface-variant cursor-pointer">
                    Remember me
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-4 primary-gradient text-white font-bold rounded-md shadow-lg transition-opacity ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"}`}
                >
                  {loading ? "Authenticating..." : "Login"}
                </button>
              </form>

              {/* ROLE BUTTONS (Kept for prototype/demo purposes) */}
              <div className="mt-10 pt-6 border-t text-center">
                <p className="text-xs tracking-widest text-gray-400 mb-4">
                  SELECT ROLE (FOR PROTOTYPE DEMO)
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleRoleLogin("Global Admin")}
                    type="button"
                    className="bg-surface-container-high text-primary text-sm py-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Login as Global Admin
                  </button>
                  <button
                    onClick={() => handleRoleLogin("School Admin")}
                    type="button"
                    className="bg-surface-container-high text-primary text-sm py-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Login as School Admin
                  </button>
                  <button
                    onClick={() => handleRoleLogin("Teacher")}
                    type="button"
                    className="bg-surface-container-high text-primary text-sm py-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Login as Teacher
                  </button>
                  <button
                    onClick={() => handleRoleLogin("Student")}
                    type="button"
                    className="bg-surface-container-high text-primary text-sm py-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Login as Student
                  </button>
                  <button
                    onClick={() => handleRoleLogin("Parent")}
                    type="button"
                    className="bg-surface-container-high text-primary text-sm py-2 rounded-md col-span-2 hover:bg-gray-100 transition-colors"
                  >
                    Login as Parent
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-400 pb-8">
        Secure login powered by encrypted authentication.
        <br />© 2024 Academic Architect
      </footer>
    </div>
  );
}