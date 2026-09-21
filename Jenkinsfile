pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Install') {
            steps {
                bat '''
                if not exist "%WORKSPACE%\\.npm-cache" mkdir "%WORKSPACE%\\.npm-cache"
                npm install --cache "%WORKSPACE%\\.npm-cache"
                '''
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'echo No tests configured'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully.'
        }

        failure {
            echo 'Build failed.'
        }
    }
}
