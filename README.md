
  # ФИНАЛ ФИНАЛЫЧ DREAM DIGITAL

  This is a code bundle for ФИНАЛ ФИНАЛЫЧ DREAM DIGITAL. The original project is available at https://www.figma.com/design/GazriBQBCM5NlDtWljcpDQ/%D0%A4%D0%98%D0%9D%D0%90%D0%9B-%D0%A4%D0%98%D0%9D%D0%90%D0%9B%D0%AB%D0%A7-DREAM-DIGITAL.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  ## Lead form email setup

  This project uses Web3Forms to send contact form submissions via email from the component `src/components/LeadCapture.tsx`.

  1. Create a free account at https://web3forms.com and obtain your Access Key.
  2. Create a `.env` file in the project root and set:
     
     ```
     VITE_WEB3FORMS_KEY=YOUR_ACCESS_KEY_HERE
     ```
  3. Restart the dev server after adding or changing env vars.
  4. Test the form on the site; you should receive emails at the address configured in Web3Forms.

  For deployment, ensure the `VITE_WEB3FORMS_KEY` environment variable is configured in your hosting provider.

  ## GitHub Repository

  To publish the code to GitHub:

  ```bash
  git init
  git add -A
  git commit -m "chore: initial import of DreamDigital site"
  git branch -M main
  git remote add origin https://github.com/mokich45usa-ctrl/dream_digital_new
  git push -u origin main
  ```

  ## AI Assistant (DeepSeek) on Netlify

  This project includes an AI chat in `src/components/AIDrawer.tsx`. It calls a Netlify Function at `/.netlify/functions/deepseek-chat`.

  - Netlify function: `netlify/functions/deepseek-chat.js`
  - Configure environment variable on Netlify:
    - `DEEPSEEK_API_KEY=YOUR_DEEPSEEK_KEY`
  - Deploy will expose the function at `/.netlify/functions/deepseek-chat`.

  Local test (Netlify CLI):
  ```bash
  npm i -g netlify-cli
  netlify dev
  ```

  ## SEO Setup

  - Edit `index.html` meta tags (title, description, OG/Twitter). Replace `<YOUR_DOMAIN_OR_NETLIFY>` with your real domain.
  - Place preview image at `public/og-image.jpg` for social sharing.
  - Update `public/robots.txt` and `public/sitemap.xml` with your domain.
  - In Netlify domain settings, set primary domain and enable HTTPS.

  
  <!-- deploy marker: force rebuild -->
  