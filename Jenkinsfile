pipeline {
    agent any
    stages {
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
        stage('Build') {
            steps {
                dir('C:/Users/Gary/Documents/2S 2020/SA/lab/Practica7_SA'){
                    echo 'Building..'
                    bat """
                        call ${GULP}
                    """
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('C:/Users/Gary/Documents/2S 2020/SA/lab/Practica7_SA'){
                    echo 'Deploying....'
                    bat """
                        cd ..
                        call git clone https://github.com/GaryGiron/2S2020SA_artefactosApp.git
                        copy Practica7_SA\\dist\\app.zip 2S2020SA_artefactosApp
                        cd 2S2020SA_artefactosApp
                        call git add .
                        call git config user.email "gsteph393@gmail.com"
                        call git config user.name "GaryGiron"
                        call git commit -m "Nuevos artefactos"
                        call git push origin master
                    """
                }
                
            }
        }
    }
}
