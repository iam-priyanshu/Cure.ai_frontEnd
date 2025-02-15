# Cure.AI Frontend Development

## Project Overview
This repository contains the frontend code for the **Cure.AI** project, a web-based healthcare platform designed to facilitate online medical consultations. The project includes a user-friendly interface for uploading medical documents, adding comments, and managing consultations.

## Features Implemented
- **Patient Information Panel**
  - Displays patient details such as name, age, and gender.
  - Includes a section for previous conversations.
  - Option to end the consultation session.

- **Document Upload Section**
  - Allows users to upload medical reports, prescriptions, and test results.
  - Supports file uploads up to 5MB.
  - Provides clear guidelines for uploading images.

- **User Interaction Elements**
  - Text input field for additional comments to assist in diagnosis.
  - Integrated microphone and language support icons for enhanced accessibility.
  - Skip button to proceed without uploading documents.

## Technologies Used
- **React.js**: Frontend framework for building UI components.
- **Tailwind CSS**: For styling and responsive design.
- **Lucide-react**: Icon library for UI enhancements.
- **Vite**: Development environment for fast builds and optimizations.

## Project Structure
```
/src
  ├── assets
  │   ├── cureAiLogo.png  # Cure.AI logo
  │   ├── userProfile.png  # Default user profile image
  │
  ├── components
  │   ├── Screen15.jsx  # Main UI component for document upload
  │
  ├── App.js  # Entry point for React application
  ├── index.js  # Root file for rendering React app
```

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/cure-ai-frontend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd cure-ai-frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
## Website Link
- https://cure-ai-front-end-j6lw.vercel.app

## Troubleshooting
- If you encounter errors related to missing assets, ensure that `cureAiLogo.png` and `userProfile.png` are correctly placed inside the `src/assets` directory.
- Check the import paths if the Vite server fails to resolve asset imports.

## Future Enhancements
- Implement drag-and-drop functionality for document uploads.
- Improve accessibility with voice-to-text input for comments.
- Add real-time chat support for medical consultations.

## Contributions
Feel free to fork the repository and submit pull requests for improvements. If you encounter any issues, please create a new issue in the repository.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---
**Author:** Priyanshu Singh  
**GitHub:** [yourusername](https://github.com/yourusername)

