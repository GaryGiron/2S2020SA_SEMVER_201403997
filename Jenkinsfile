pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                npm install
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                npm test
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}