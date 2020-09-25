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
                dir('C:/Users/Gary/Documents/2S 2020/SA/lab/Practica7_SA'){
                    echo 'Testing..'
                    bat 'npm test'
                    cmd="ssh cat logJenkins.txt"
                    echo $cmd
                    $cmd
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}