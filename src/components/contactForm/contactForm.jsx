import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

export function ContactForm() {
  const [formData, setFormData] = useState({
    navn: "",
    epost: "",
    tema: "",
    melding: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": "TWÓJ_API_KEY",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Kontakt Skjema",
          email: "naprapatklinikkvest@gmail.com",
        },
        to: [
          {
            email: "naprapatklinikkvest@gmail.com",
            name: "Naprapat Örjan Bask",
          },
        ],
        replyTo: { email: formData.epost, name: formData.navn },
        subject:
          formData.tema || "Ny henvendelse fra kontaktskjema via nettside",
        htmlContent: `
          <h3>Ny melding fra kontaktskjemaet</h3>
          <p><strong>Navn:</strong> ${formData.navn}</p>
          <p><strong>E-post:</strong> ${formData.epost}</p>
          <p><strong>Tema:</strong> ${formData.tema}</p>
          <p><strong>Melding:</strong><br/>${formData.melding}</p>
        `,
      }),
    });

    if (response.ok) {
      setStatus("Takk! Meldingen ble sendt.");
      setFormData({ navn: "", epost: "", tema: "", melding: "" });
    } else {
      setStatus("Noe gikk galt. Prøv igjen senere.");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "#f0f4fa",
        color: "#1b365d",
        borderRadius: "1rem",
        p: 4,
        maxWidth: 700,
        margin: "auto",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: "#1b365d" }}>
        Kontakt oss
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Navn"
          name="navn"
          placeholder="Skriv inn ditt navn"
          value={formData.navn}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="E-postadresse"
          name="epost"
          placeholder="din@email.no"
          value={formData.epost}
          onChange={handleChange}
          margin="normal"
          required
          type="email"
        />
        <TextField
          fullWidth
          label="Tema"
          name="tema"
          placeholder="Hva gjelder henvendelsen?"
          value={formData.tema}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Melding"
          name="melding"
          placeholder="Skriv meldingen din her..."
          value={formData.melding}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={5}
          required
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            mt: 3,
            backgroundColor: "#1b365d",
            "&:hover": {
              backgroundColor: "#274b85",
            },
            paddingX: 4,
            paddingY: 1,
            borderRadius: "8px",
            display: "block",
            width: { xs: "100%" },
            mx: { xs: "auto", sm: "2" },
          }}
        >
          Send melding
        </Button>

        {status && (
          <Typography variant="body2" color="#1b365d" sx={{ mt: 2 }}>
            {status}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}
