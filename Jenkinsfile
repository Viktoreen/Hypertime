pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage('Install, build and serve') {
            steps {
                bat 'npm run serve'
            }
        }
        /*
        stage('Check lint') {
            steps {
                bat 'npm run lintme'
            }
        }
        stage('Build install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build install files') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test -- --coverage'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Right here waiting for you...'
                bat 'npm install -g serve'
                bat 'serve -s build'
                bat 'npm eject'
            }
        }
        */
    }
}
