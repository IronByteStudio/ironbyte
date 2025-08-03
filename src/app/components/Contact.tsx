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
            `mailto:ironbytedevstudio@gmail.com?subject=${formData.Name}&body=${formData.Message}`
        );
    };

    return (
        <>
            <Box sx={{ bgcolor: "primary.main", padding: 2, textAlign: "center", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Stack spacing={2} alignItems="center">
                    <Typography variant="h2" color="white" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "white", maxWidth: 500, textAlign: "center" }}>
                        Ready to start your next project or have questions? Reach out and let’s create something great together.
                    </Typography>
                    <Divider />
                    <Stack justifyContent="center" alignItems="center" sx={{width: "50%"}} direction="column" spacing={4}>
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
                            sx={{ px: 4, py: 2, mt:4, width: "50%" }}
                            variant="contained"
                        >
                            Book a call
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default Contact;
