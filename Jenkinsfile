pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        /*
        stage('Install, build and serve') {
            steps {
                bat 'npm run serve'
            }
        }
        */
        /*stage('Check lint') {
            steps {
                sh 'npm run lint'
            }
        }*/
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
        /*stage('Test') {
            steps {
                sh 'npm run test -- --coverage'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Right here waiting for you...'
                bat 'npm install -g serve'
                bat 'serve -s build'
                bat 'npm eject'
            }
        }*/
        
    }
}
