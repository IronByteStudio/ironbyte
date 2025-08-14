import {
  BaseTextFieldProps,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

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
  return (
    <TextField
      {...props}
      hiddenLabel
      id={`Contact-${label}`}
      variant="filled"
      value={value}
      onChange={(e) => {
        setFormData({ ...formData, [label]: e.target.value });
      }}
      placeholder={label}
      size="small"
      sx={{
        bgcolor: 'white',
        borderRadius: 1,
        width: 1,
        input: { color: 'black' },
      }}
    />
  );
};

const Contact = () => {
  const [formData, setFormData] = useState<FormDataProps>({});
  const theme = useTheme();

  const handleSubmit = () => {
    if (!formData.Name || !formData.Email || !formData.Message) {
      alert('Please fill out all fields prior to submission');
      return;
    }
    window.open(
      `mailto:ironbytedevstudio@gmail.com?subject=${formData.Name}&body=${formData.Message}`,
    );
  };

  return (
  <Box sx={{ width: 1, minHeight: '100vh', py: { xs: 4, md: 8 }, px: { xs: 2, md: 0 }, bgcolor: 'primary.main', display: 'flex', alignItems: 'center' }}>
      <Stack spacing={2} alignItems="center" sx={{ width: 1 }}>
        <Typography variant="h2" color="primary.contrastText" gutterBottom>
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: 'primary.contrastText', maxWidth: 500, textAlign: 'center' }}
        >
          Ready to start your next project or have questions? Reach out and
          let’s create something great together.
        </Typography>
        <Divider sx={{ width: '100%' }} />
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: { xs: '100%', md: '50%' },
            padding: { xs: '1rem 0.25rem', md: '2rem 0' },
          }}
          direction="column"
          spacing={2}
        >
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
            minRows={3}
            label="Message"
          />
          <Button
            onClick={handleSubmit}
            sx={{
              px: { xs: 2, md: 4 },
              py: { xs: 1, md: 2 },
              mt: 2,
              width: { xs: '100%', md: '50%' },
              backgroundColor: theme.palette.accent.main,
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.accent.dark ?? theme.palette.accent.main,
                color: theme.palette.primary.contrastText,
              },
            }}
            variant="contained"
            size="small"
          >
            Book a call
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
