pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                npm install
                cd src
                cd cliente
                npm install
                set DEBUG=cliente:* & npm start
                cd ..
                cd repartidor
                npm install
                set DEBUG=repartidor:* & npm start
                cd ..
                cd restaurante
                npm install
                set DEBUG=restaurante:* & npm start
                cd ..
                cd orquestador
                npm install
                set DEBUG=orquestador:* & npm start
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