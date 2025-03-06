pipeline{
    agent{
        docker{
            image 'cypress/browsers'
            args '--entrypoint=""'
        }
    }
    stages{
       
         stage("verifier la version de cypress"){
            steps{
                sh 'npx cypress --version'
            }
        }
        
         stage("installer les dependance"){
            steps {
                sh 'npm install'
            }
        }
         stage("verifier que npm fonctionne"){
            steps{
                sh 'npm --version'
            }
        }
        stage("installation  de cypress "){
            steps {
                sh 'npx cypress install'
            }
        }

        

        stage("Executer les test"){
            steps{
                sh 'npx cypress run'
            }
        } 

      
    }
      post{
      always {
            junit 'results/**/*.xml'
        }
    }
}