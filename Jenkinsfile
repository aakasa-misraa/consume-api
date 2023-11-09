pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Build') {
      steps {
        echo "Build Started"
        git 'https://github.com/aakasa-misraa/consume-api'
        bat 'npm install'
      }}}}
