import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  ArrowBack,
  Edit,
  Delete,
  Save,
  Cancel,
  Person,
  Email,
  Home,
  Badge,
} from "@mui/icons-material";

const API_URL = "https://students-learning-api.onrender.com/api/auth";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  // GET: Fetch one user using the URL parameter.
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        setError("");
        setUser(null);

        const response = await axios.get(`${API_URL}/${id}`);

        const data = response.data;
        const foundUser = data.user ?? data.data?.user ?? data.data ?? data;

        if (!foundUser || typeof foundUser !== "object") {
          throw new Error("Invalid user data received.");
        }

        setUser(foundUser);

        setForm({
          firstName: foundUser.firstName || "",
          lastName: foundUser.lastName || "",
          email: foundUser.email || "",
          address: foundUser.address || "",
        });
      } catch (err) {
        console.error(err);
        setError(
          err.response?.data?.message ||
            err.message ||
            "Unable to fetch user details.",
        );
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [id]);

  // Handle form input changes.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  // PUT: Update user details.
  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");
      setMessage("");

      const response = await axios.put(`${API_URL}/${id}`, form);

      const data = response.data;
      const updatedUser = data.user ?? data.data?.user ?? data.data;

      setUser((previousUser) => ({
        ...previousUser,
        ...(updatedUser && typeof updatedUser === "object"
          ? updatedUser
          : form),
      }));

      setEditing(false);
      setMessage("User updated successfully.");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Update failed. Check your backend route.",
      );
    } finally {
      setSaving(false);
    }
  };

  // DELETE: Remove user after confirmation.
  const handleDelete = async () => {
    try {
      setDeleting(true);
      setError("");

      await axios.delete(`${API_URL}/${id}`);

      setDeleteDialog(false);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Delete failed. Check your backend route.",
      );
      setDeleteDialog(false);
    } finally {
      setDeleting(false);
    }
  };

  const handleCancelEdit = () => {
    setForm({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      address: user.address || "",
    });

    setEditing(false);
    setError("");
    setMessage("");
  };

  const fullName =
    `${user?.firstName || ""} ${user?.lastName || ""}`.trim() ||
    user?.name ||
    "User";

  // Loading screen.
  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          bgcolor: "#f5f7fb",
        }}
      >
        <CircularProgress color="success" />
        <Typography color="text.secondary">Loading user details...</Typography>
      </Box>
    );
  }

  // Error screen when the user cannot be fetched.
  if (error && !user) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>

        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/")}
          variant="contained"
        >
          Back to Users
        </Button>
      </Container>
    );
  }

  if (!user) return null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f7fb",
        py: { xs: 3, md: 6 },
      }}
    >
      <Container maxWidth="md">
        {/* Back button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/")}
          sx={{
            mb: 3,
            color: "#176b4d",
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Back to Users
        </Button>

        {/* Profile header */}
        <Card
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid #e7ecef",
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
              color: "white",
              textAlign: "center",
              px: 3,
              py: { xs: 4, md: 5 },
            }}
          >
            <Avatar
              sx={{
                width: 100,
                height: 100,
                mx: "auto",
                mb: 2,
                bgcolor: "#d1fae5",
                color: "#065f46",
                border: "4px solid rgba(255,255,255,0.9)",
                fontSize: 38,
                fontWeight: 800,
              }}
            >
              {fullName.charAt(0).toUpperCase()}
            </Avatar>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 25, md: 32 },
                overflowWrap: "anywhere",
              }}
            >
              {fullName}
            </Typography>

            <Typography sx={{ mt: 1, color: "#d1fae5" }}>
              User Profile
            </Typography>
          </Box>

          <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
            {message && (
              <Alert
                severity="success"
                onClose={() => setMessage("")}
                sx={{ mb: 3 }}
              >
                {message}
              </Alert>
            )}

            {error && (
              <Alert
                severity="error"
                onClose={() => setError("")}
                sx={{ mb: 3 }}
              >
                {error}
              </Alert>
            )}

            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
              {editing ? "Edit User Information" : "Personal Information"}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {editing
                ? "Update the user's details using the form below."
                : "View the user's registered information."}
            </Typography>

            <Divider sx={{ mb: 3 }} />

            {editing ? (
              <Box component="form" onSubmit={handleUpdate}>
                <Stack spacing={2.5}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    fullWidth
                    required
                  />

                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    fullWidth
                    required
                  />

                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />

                  <TextField
                    label="Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    minRows={2}
                  />

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ pt: 1 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<Save />}
                      disabled={saving}
                      sx={{
                        bgcolor: "#087f5b",
                        textTransform: "none",
                        fontWeight: 700,
                        py: 1.3,
                        "&:hover": { bgcolor: "#065f46" },
                      }}
                    >
                      {saving ? "Updating..." : "Save Changes"}
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={<Cancel />}
                      onClick={handleCancelEdit}
                      disabled={saving}
                      sx={{
                        textTransform: "none",
                        fontWeight: 700,
                        py: 1.3,
                      }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            ) : (
              <Stack spacing={2}>
                {[
                  {
                    label: "First Name",
                    value: user.firstName,
                    icon: <Person />,
                  },
                  {
                    label: "Last Name",
                    value: user.lastName,
                    icon: <Badge />,
                  },
                  {
                    label: "Email Address",
                    value: user.email,
                    icon: <Email />,
                  },
                  {
                    label: "Address",
                    value: user.address,
                    icon: <Home />,
                  },
                ].map((item) => (
                  <Paper
                    key={item.label}
                    elevation={0}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      p: 2,
                      border: "1px solid #e7ecef",
                      borderRadius: 3,
                      bgcolor: "#fff",
                    }}
                  >
                    <Avatar
                      variant="rounded"
                      sx={{
                        bgcolor: "#e8f7ef",
                        color: "#087f5b",
                        width: 44,
                        height: 44,
                      }}
                    >
                      {item.icon}
                    </Avatar>

                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {item.label}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 700,
                          overflowWrap: "anywhere",
                        }}
                      >
                        {item.value || "Not provided"}
                      </Typography>
                    </Box>
                  </Paper>
                ))}

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ pt: 2 }}
                >
                  <Button
                    variant="contained"
                    startIcon={<Edit />}
                    onClick={() => {
                      setError("");
                      setMessage("");
                      setEditing(true);
                    }}
                    sx={{
                      flex: 1,
                      py: 1.4,
                      bgcolor: "#087f5b",
                      textTransform: "none",
                      fontWeight: 700,
                      "&:hover": { bgcolor: "#065f46" },
                    }}
                  >
                    Edit User
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Delete />}
                    onClick={() => setDeleteDialog(true)}
                    sx={{
                      flex: 1,
                      py: 1.4,
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    Delete User
                  </Button>
                </Stack>
              </Stack>
            )}
          </CardContent>
        </Card>
      </Container>

      {/* Delete confirmation dialog */}
      <Dialog
        open={deleteDialog}
        onClose={() => !deleting && setDeleteDialog(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle sx={{ fontWeight: 800 }}>Delete this user?</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {fullName}? This action may
            permanently remove the user from your database.
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ p: 2.5 }}>
          <Button onClick={() => setDeleteDialog(false)} disabled={deleting}>
            Cancel
          </Button>

          <Button
            onClick={handleDelete}
            color="error"
            variant="contained"
            disabled={deleting}
            startIcon={
              deleting ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                <Delete />
              )
            }
          >
            {deleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserDetails;
