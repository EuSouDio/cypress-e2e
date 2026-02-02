pipeline {
    agent any

    options{
        ansiColor('xterm')
    }
    stages{
        stage('Build'){
            steps{
                git branch: 'Mochawesome', url: 'https://github.com/Dionisio1/pessoal_starter_qa.git'
            }
        }
        stage('Install'){
            steps{
                bat 'npm i' 
            }
        }
        stage('Test'){
            steps{
                bat 'npm run cy:run:home'
            }
        }
        
    }
    post{
        always{
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress\\reports\\html\\', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }    
}