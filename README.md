

## Installation and Setup  
Follow these steps to run the project locally:  

### Prerequisites  
- Node.js (v16 or higher)  
- Git  

### Steps  
#### 1. Clone the repository:  
   ```bash  
   git clone https://github.com/phaminhieu30/WebsiteUTEShop.git
   cd WebsiteUTEShop
   ```
#### 2. Front end Setup
   ##### 2.1. Direct to frontend folder
   ```bash
   cd front-end
   ```
  ##### 2.2. Install package
  
  ```bash
  npm install
  ```
  ##### 2.3. Run code
  ```bash
  npm run dev
  ```

  ##### 2.3. Open the application in your browser
  
  Access http://localhost:3000  

#### 3. Back end setup
  ##### 3.1. Direct to backend folder
  ```bash
  cd back-end
  ```
  ##### 3.2. Install package
  ```bash
  npm install
  ```
  ##### 3.3. Run code
  ```bash
  npm start
  ```
## Folder Structures
### 1. Backend
### 2. Frontend
This document explains the structure of the frontend project and describes the purpose of each folder within the `/src` directory.
#### `/components`
This folder contains reusable React components that can be used throughout the application.  
Examples include buttons, input fields, modals, and other UI elements.

#### `/pages`
This folder includes components representing different pages of the website.  
Each file corresponds to a specific route in the application, such as the home page, about page, or contact page.

#### `/assets`
Static assets like images, icons, and other media files are stored here.  
This ensures that all static resources are organized and easily accessible.

#### `/utils`
Contains utility functions and constants that are used across the application.  
Examples include helper functions for formatting dates, calculating values, or handling API requests.

---

#### How to Use This Structure
1. Place reusable UI components in `/components` to keep the code modular.
2. Create a new file in `/pages` for each unique route or page in your application.
3. Store all static assets in `/assets` to maintain consistency.
4. Add shared logic and constants to `/utils` for easier management and reuse.

Feel free to extend the structure as needed for your project requirements.
