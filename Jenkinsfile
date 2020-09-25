pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                bat 'npm install'
                bat 'npm install -g mocha --save-dev'
                bat 'cd node_modules'
                bat 'cd mocha'
                bat 'mocha ..\..\test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}