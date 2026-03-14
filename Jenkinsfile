pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/lakshmi-shanmugam/Playwright_SDET_TS_FullCourse.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test tests/OrangeHRM/ --reporter=html'
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    allowMissing         : false,
                    alwaysLinkToLastBuild: true,
                    keepAll              : true,
                    reportDir            : 'playwright-report',
                    reportFiles          : 'index.html',
                    reportName           : 'Playwright Report'
                ])
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
        success {
            echo 'All tests passed!'
        }
        failure {
            echo 'Tests failed - check the report!'
        }
    }
}