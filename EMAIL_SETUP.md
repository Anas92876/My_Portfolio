# Email Contact Form Setup Guide

This guide will help you set up the contact form to send emails using Nodemailer.

## How It Works

**Important:** The EMAIL_USER is YOUR email account, not the user's email!

Here's the email flow:
1. **User fills out the form** with their name, email, subject, and message
2. **Your email account (EMAIL_USER)** sends the email on behalf of your website
3. **You receive the email** in your inbox (EMAIL_TO = mhab36817@gmail.com)
4. **The user's email** is set as "Reply-To", so you can click "Reply" to respond directly to them

**Example:**
- User enters their email: `john@example.com`
- Email is sent FROM: `your-email@gmail.com` (EMAIL_USER)
- Email is sent TO: `mhab36817@gmail.com` (EMAIL_TO)
- Reply-To: `john@example.com` (user's email from form)
- When you click "Reply" in your inbox, it automatically goes to `john@example.com`

## Quick Start

### 1. Install Dependencies

Already done! The project includes:
- `nodemailer` - Email sending library
- `@types/nodemailer` - TypeScript types

### 2. Configure Environment Variables

#### For Local Development:

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your email credentials (see examples below).

#### For Vercel Deployment:

Go to your Vercel project → Settings → Environment Variables and add:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=mhab36817@gmail.com
```

## Email Provider Setup

### Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password

3. **Environment Variables:**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx  # App Password (remove spaces)
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=mhab36817@gmail.com
```

### Outlook/Hotmail

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
EMAIL_FROM=your-email@outlook.com
EMAIL_TO=mhab36817@gmail.com
```

### Other SMTP Providers

For other providers (SendGrid, Mailgun, AWS SES, etc.), use their SMTP settings.

## Testing

### Local Testing

1. Set up your `.env.local` file
2. Run the dev server: `npm run dev`
3. Go to `http://localhost:3000/contact`
4. Fill out and submit the form
5. Check your inbox for the email

### Production Testing

1. Deploy to Vercel
2. Add environment variables in Vercel dashboard
3. Redeploy if needed
4. Test the contact form on your live site

## Troubleshooting

### "Invalid credentials" Error
- Double-check your EMAIL_USER and EMAIL_PASS
- For Gmail, make sure you're using an App Password, not your regular password
- Verify 2FA is enabled on your Google account

### "Connection timeout" Error
- Check EMAIL_HOST and EMAIL_PORT are correct
- Some ISPs block port 587, try port 465 with EMAIL_SECURE=true
- Check firewall settings

### Email not arriving
- Check spam folder
- Verify EMAIL_TO is correct
- Check email provider logs for bounces

### Gmail "Less secure app" Error
- This error means you need to use an App Password
- Regular passwords don't work anymore - you MUST use App Passwords
- Enable 2FA first, then generate an App Password

## Security Notes

- **Never commit** `.env.local` or any file with real credentials to Git
- `.env.local` is already in `.gitignore`
- Use Vercel Environment Variables for production
- Consider using a dedicated email account for sending
- App Passwords are more secure than using your main password

## File Structure

```
app/
  api/
    send-email/
      route.ts          # API endpoint for sending emails
components/
  sections/
    ContactSection.tsx  # Contact form component
.env.example           # Template for environment variables
```

## API Endpoint

**POST** `/api/send-email`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I would like to discuss..."
}
```

Success response (200):
```json
{
  "message": "Email sent successfully"
}
```

Error response (400/500):
```json
{
  "error": "Error message here"
}
```

## Production Checklist

- [ ] Environment variables added to Vercel
- [ ] App Password generated (for Gmail)
- [ ] Email provider SMTP enabled
- [ ] Form tested locally
- [ ] Form tested in production
- [ ] Email arrives in inbox (not spam)
- [ ] Error handling works correctly

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check Vercel function logs
3. Verify all environment variables are set correctly
4. Test your SMTP credentials with a tool like Mailtrap or Ethereal
