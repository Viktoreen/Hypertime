pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        
        stage('Cleanup') {
            steps {
                sh 'cd hypertime-frontend && npm run clean:all && cd ..'
            }
        }
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
        stage('Build dist files') {
            steps {
                sh 'cd hypertime-frontend && npm run build && cd ..'
            }
        }
        stage('Test step') {
            steps {
                sh 'cd hypertime-frontend && npm run test && cd ..'
            }
        }
    }
}