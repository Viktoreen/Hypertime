pipeline {
    agent any
    tools {nodejs "node"}

    stages {

        stage('Build install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build install files') {
            steps {
                sh 'npm run build'
            }
        }
        /*
        stage('Test') {
            steps {
                sh 'npm run test -- --coverage'
            }
    
        }
        */
    }
}