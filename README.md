<h1 align="center">🎨 UI Code Quality CI Pipeline</h1>

<p align="center">
  <a href="https://sonarcloud.io/dashboard?id=mahek320_ui-ci-code-quality">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=mahek320_ui-ci-code-quality&metric=alert_status" alt="Quality Gate Status">
  </a>
  <a href="https://sonarcloud.io/dashboard?id=mahek320_ui-ci-code-quality">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=mahek320_ui-ci-code-quality&metric=coverage" alt="Coverage">
  </a>
</p>

---

## 🛠️ Features

- ✅ Code Linting with `ESLint`  
- 🎨 Code Formatting Check using `Prettier`  
- 🧪 Unit Testing & Coverage with `Jest`  
- 🔐 Vulnerability Scan with `Retire.js`  
- 📊 Code Quality Analysis using `SonarCloud`  
- 📧 Email Notifications with Attached Reports  
- ☁️ Upload CI Artifacts for Easy Access  

---

## 📂 Pipeline Workflow

1. **Checkout Repository**
2. **Set Up Node.js 18**
3. **Install Dependencies and SonarScanner**
4. **Run ESLint for Code Linting**
5. **Check Formatting with Prettier**
6. **Run Unit Tests and Generate Coverage**
7. **Scan for Vulnerabilities using Retire.js**
8. **Upload ESLint, Prettier, Coverage, and Retire.js Reports**
9. **Run SonarQube Code Quality Analysis**
10. **Send Email Notification with Dashboard Link and Reports**

---

## 📊 Reports & Dashboard

- 🔗 [SonarCloud Dashboard](https://sonarcloud.io/project/overview?id=mahek320_ui-ci-code-quality)  
- 📄 ESLint Report (`eslint-report.txt`)  
- 📄 Prettier Report (`prettier-report.txt`)  
- 📄 Retire.js Security Report (`retire-report.txt`)  
- 📈 Coverage Report (`coverage/lcov-report/index.html`)  

---

## 🚀 Technologies Used

- **Node.js 18**
- **ESLint**
- **Prettier**
- **Jest**
- **Retire.js**
- **SonarScanner**
- **GitHub Actions**

---

## 📬 Email Notification

The pipeline sends an email including:
- 📎 ESLint, Prettier, Retire.js, and Coverage Reports  
- 🔗 Link to SonarQube Dashboard  

---

Feel free to [explore the repository](https://github.com/mahek320/ui-ci-code-quality) or open issues and contribute!

