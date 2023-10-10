pipeline {
    agent any
    environment {
        CI = 'false'
        HOME = '.'
        YOUR_BUCKET_REGION = 'us-east-1'
        CREDENTIALS_FROM_JENKINS_SETUP = 'c-reactjs-comp-aws'
        YOUR_BUCKET_NAME = 'c-reactjs-comp'
    }

    stages {
        // stage ('Git Checkout') {
        //     steps {
        //         git branch: 'main', url: 'https://github.com/thaianhnv99/c-reactjs_comp.git'
        //     }
        // }
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/thaianhnv99/c-reactjs_comp.git'
            }
        }
        // stage('Build docker') {
        //     steps {
        //         withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
        //             // dir('C:/home/directory/workspace/c-reactjs-comp/cicd') {
        //                 sh 'docker build -t thainv99/react-app:v1 .'
        //                 sh 'docker push thainv99/react-app:v1'
        //             // }
        //         }
        //     }
        // }
        stage('Build') {
            steps {
                nodejs('node.latest') {
                    sh 'npm install yarn -g'
                    sh 'yarn'
                    // sh 'yarn build'
                }
            }
        }
        // stage('Deploy to S3') {
        //     steps {
        //         withAWS(region:YOUR_BUCKET_REGION,credentials:CREDENTIALS_FROM_JENKINS_SETUP) {
        //             s3Delete(bucket: YOUR_BUCKET_NAME, path: '**/*')
        //             s3Upload(bucket: YOUR_BUCKET_NAME, workingDir: 'build', includePathPattern: '**/*');
        //         }
        //     }
        // }
        stage('Login to EC2 & build') {
            steps {
                script {
                    sshagent(credentials: ['54.159.155.25']) {
                        sh '''
                            ssh -tt -o StrictHostKeyChecking=no ec2-user@54.224.59.123 "
                            cd c-reactjs_comp
                            git pull origin main
                            docker-compose down
                            docker-compose up -d"
                        '''                
                    }
                }
            }
        }
    }
}