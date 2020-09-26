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
                    bat 'npm run coverage'
                }
            }
        }
        stage('Analysis') {
            steps {
                dir('C:/Users/Gary/Documents/2S 2020/SA/lab/Practica7_SA'){
                    echo 'Analysis..'
                    bat 'sonar-scanner.bat -D"sonar.projectKey=com-example:SA" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9123" -D"sonar.login=ac995574fb4d8e0b3b91c2851a1cddb2672d1b21"'
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