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
        /*stage('Test step') {
            steps {
                sh 'cd hypertime-frontend && npm run test && cd ..'
            }
        }*/
        stage('Deploy') {
            steps {
                sh 'az storage blob upload-batch -s /var/lib/jenkins/workspace/Hypertime_master/hypertime-frontend/build -d /$web --connection-string="DefaultEndpointsProtocol=https;AccountName=ecutbildning;AccountKey=hTzQiTDx4w1/Cuh1fADc66g9O23/atfZS1hfCZ33vrgaJ8LC5lNrUmfQRQldBD/beeH++hS+kFvMVDYMI3jaiA==;EndpointSuffix=core.windows.net"'
            }
        }        
    }
}