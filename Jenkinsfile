pipeline {
    agent any
    tools {nodejs "node"}

    stages {

        stage('Install dependencies') {
            steps {
                sh 'cd hypertime-frontend && npm install && cd ..'
            }
                
            steps {
                sh 'cd hypertime-e2e && npm install && cd ..'
            }
        }
        stage('Build install files') {
            steps {
                sh 'cd hypertime-frontend && npm run build && cd ..'
            }

            steps {
                sh 'cd hypertime-e2e && npm run build && cd ..'
            }
        }
    }
}