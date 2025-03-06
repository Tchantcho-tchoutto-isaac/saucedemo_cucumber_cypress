pipeline{
    agent{
        docker{
            image 'cypress/browsers'
            args '--entrypoint=""'
        }
    }
     parameters {
        // choice(name: 'TAG', choices: ['smoke', 'e2e', 'sanity', 'regression', 'login'], description: 'TAG des tests Cypress')
        string(name: 'TAG', defaultValue: '@', description: 'TAG du test')
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

                steps {
                script{
                def testCommand = "npx cypress run"
                if (params.TAG?.trim()) {
                        testCommand += " --env TAGS='${params.TAG}'"
                    }
                sh testCommand
                }

            steps{
                sh 'npx cypress run'
            }
        } 

      
    }
     
    post {
        always {
        cucumber buildStatus: 'UNSTABLE',
                failedFeaturesNumber: 1,
                failedScenariosNumber: 1,
                skippedStepsNumber: 1,
                failedStepsNumber: 1,
                classifications: [
                        [key: 'Commit', value: '<a href="${GERRIT_CHANGE_URL}">${GERRIT_PATCHSET_REVISION}</a>'],
                        [key: 'Submitter', value: '${GERRIT_PATCHSET_UPLOADER_NAME}']
                ],
                reportTitle: 'My report',
                fileIncludePattern: '**/*.cucumber.json',
                sortingMethod: 'ALPHABETICAL',
                trendsLimit: 100
         }
    }

}