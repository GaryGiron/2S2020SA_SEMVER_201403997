pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                cd "C:\\Users\\Gary\\Documents\\2S 2020\\SA\\lab\\Practica7_SA"
                sh "npm install"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh "npm test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}