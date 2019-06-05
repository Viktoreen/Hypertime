pipeline {
    agent any
    tools {nodejs "node"}

    stages {

        stage('Install dependencies') {
            steps {
                sh 'cd hypertime-frontend && npm install && cd ..'
                sh 'cd hypertime-e2e && npm install && cd ..'
            }
        }
        stage('Lintify') {
            steps{
                sh 'cd hypertime-frontend && npm run lint:eslint && cd ..'
            }
        }
        stage('Build install files') {
            steps {
                sh 'cd hypertime-frontend && npm run build && cd ..'
            }
        }
    }
}