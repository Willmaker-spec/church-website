import { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../assets/marek-studzinski-8T8QTMRZmEg-unsplash.jpg";
export default function SharpRegisterDesign() {
  const navigate = useNavigate();
  //state for form data

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  //Message state for form submission feedback
  const [message, setMessage] = useState("");
  //loading state for form submission
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!firstName.trim()) {
      setError("First name is required");
      return;
    }
    if (!lastName.trim()) {
      setError("Last name is required");
      return;
    }
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address,
      };
      await axios.post(
        "https://students-learning-api.onrender.com/api/auth",
        payload,
      );

      setMessage("Account created successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setAddress("");
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(
        error?.response?.data?.message ||
          "An error occurred while creating the account.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <Grid container component="main" sx={{ minHeight: "100vh" }}>
      <CssBaseline />

      {/* LEFT SIDE */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${registerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#111",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 6,
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 900,
            letterSpacing: "-0.05em",
            mb: 1,
          }}
        ></Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.05em",
          }}
        >
          © 2026 EDEN TECH SYSTEM.
        </Typography>
      </Grid>

      {/* RIGHT SIDE */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 4, md: 10 },
          py: 5,
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ maxWidth: 400, width: "100%", mx: "auto" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 1,
              letterSpacing: "-0.03em",
            }}
          >
            CREATE ACCOUNT
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Register to access your student account.
          </Typography>
          {/* //success message */}
          {message && (
            <Typography
              variant="body2"
              color="success"
              sx={{ mb: 2, fontWeight: 700 }}
            >
              {message}
            </Typography>
          )}
          {/* //error message */}
          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ mb: 2, fontWeight: 700 }}
            >
              {error}
            </Typography>
          )}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="FIRST NAME"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="LAST NAME"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              label="EMAIL ADDRESS"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              label="PASSWORD"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="PHONE NUMBER"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="ADDRESS"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 3,
                py: 1.5,
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 0,
                fontWeight: 700,
                letterSpacing: "0.1em",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#222",
                  boxShadow: "none",
                },
              }}
            >
              {loading ? "Creating Account..." : "CREATE ACCOUNT"}
            </Button>

            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              sx={{ fontSize: "0.75rem" }}
            >
              ALREADY HAVE AN ACCOUNT?{" "}
              <Link to="/Login" color="inherit" sx={{ fontWeight: 700 }}>
                SIGN IN
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
