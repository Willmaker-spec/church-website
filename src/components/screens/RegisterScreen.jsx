import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function SharpRegisterDesign() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Registration Data:", formData);

    alert("Registration form submitted!");
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
          backgroundImage:
            "url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80)",
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
        >
          THE ARCHITECT.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.05em",
          }}
        >
          © 2026 INTERNAL NETWORK SYSTEM.
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

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="FIRST NAME"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
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
              value={formData.lastName}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="PHONE NUMBER"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="ADDRESS"
              name="address"
              value={formData.address}
              onChange={handleChange}
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
              CREATE ACCOUNT
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
