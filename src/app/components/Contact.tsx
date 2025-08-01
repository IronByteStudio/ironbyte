import { BaseTextFieldProps, Box, Button, Divider, Stack, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";


interface ContactFieldProps extends BaseTextFieldProps {
    formData: FormDataProps;
    setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
    label: string;
}

interface FormDataProps {
    [key: string]: string;
}

const ContactField: React.FC<ContactFieldProps> = ({
    label,
    value,
    formData,
    setFormData,
    ...props
}) => {
    const theme = useTheme();
    const text = theme.palette.primary.contrastText;

    return (
        <Box width={1}>
            <Typography mb={1} color={text}>
                {label}
            </Typography>
            <TextField
                {...props}
                sx={{ bgcolor: 1, borderColor: "white", width: 1 }}
                hiddenLabel
                id={`Contact-${label}`}
                variant="filled"
                value={value}
                onChange={(e) => {
                    setFormData({ ...formData, [label]: e.target.value });
                }}
            />
        </Box>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState<FormDataProps>({});

    const handleSubmit = () => {
        if (!formData.Name || !formData.Email || !formData.Message) {
            alert("Please fill out all fields prior to submission");
            return;
        }
        window.open(
            `mailto:YOUREMAILHERE@EMAIL.COM?subject=${formData.Name}&body=${formData.Message}`
        );
    };

    return (
        <>
            <Box sx={{ bgcolor: "primary.main", padding: 2, textAlign: "center", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                    <Typography variant="h2" component="h1" color="primary.contrastText" gutterBottom>
                        Contact Us
                    </Typography>
                    <Divider />
                    <Stack justifyContent="center" alignItems="center" sx={{width: "50%"}} direction="column" spacing={2}>
                        <ContactField
                            formData={formData}
                            setFormData={setFormData}
                            label="Name"
                        />
                        <ContactField
                            formData={formData}
                            setFormData={setFormData}
                            label="Email"
                        />
                        <ContactField
                            formData={formData}
                            setFormData={setFormData}
                            multiline
                            label="Message"
                        />
                        <Button
                            onClick={handleSubmit}
                            sx={{ px: 4, py: 2, mt:4, width: "25%" }}
                            variant="contained"
                        >
                            Contact Me
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default Contact;
