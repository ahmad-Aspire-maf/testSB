pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        CHROMATIC_PROJECT_TOKEN = credentials('chromatic_project_token') // stored in Jenkins
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/ahmad-Aspire-maf/testSB.git', branch: 'main' // Update with your repo info
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install' // or 'yarn install' if you use yarn
            }
        }

        stage('Publish to Chromatic') {
            steps {
                sh 'npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN'
            }
        }
        stage('Debug Info') {
    steps {
        sh 'echo "Current directory: $(pwd)"'
        sh 'ls -la'
        sh 'node -v && npm -v'
        sh 'git log -1'
    }
}

    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Storybook successfully published to Chromatic.'
        }
        failure {
            echo 'Publishing failed. Check errors above.'
        }
    }
}
