pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

   stage('Install') {
    steps {
        bat '''
        if not exist "%WORKSPACE%\\.npm-cache" mkdir "%WORKSPACE%\\.npm-cache"
        npm config set cache "%WORKSPACE%\\.npm-cache"
        npm install
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
                archiveArtifacts artifacts: 'dist/**'
            }
        }
    }
}
